{% assign locations = site.locations.location_data %}
  
function initLeafletLocationsMap(){

    const locations = [
      {% for location in locations %}
        { name: "{{ location.name }}", coords: [{{ location.coordinates }}] }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ];

    const map = L.map("locations-map", {
        scrollWheelZoom: false,
        dragging: false,
        tap: false,
    });

    let mapActivated = false;
    const mapContainer = document.getElementById("locations-map");
    
    function activateMap() {
        if (mapActivated) return;
    
        map.scrollWheelZoom.enable();
        map.dragging.enable();
        map.tap && map.tap.enable();
    
        mapContainer.classList.add("map-activated");
        mapActivated = true;
    }
    
    ["click", "mousedown", "touchstart"].forEach(evt =>
        mapContainer.addEventListener(evt, activateMap, { once: true })
    );

    {% if site.locations.map_theme_url %}
      var tileUrl = "{{ site.locations.map_theme_url }}";
    {% else %}
      var tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    {% endif %}

    var attribution = "{{ site.locations.map_theme_attribution | default: '&copy; OpenStreetMap contributors' }}";
    L.tileLayer(tileUrl, { attribution }).addTo(map);

    const markerIconClass = "{{ site.locations.map_marker_icon | default: 'fa-solid fa-location-dot' }}"
    const markerColor = "{{ site.locations.map_marker_color | default: '#960A0A' }}";
    const markerIcon = L.divIcon({
      html: `<i class="${markerIconClass}" style="color: ${markerColor}; font-size:2.5rem; filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5));"></i>`,
      className: "custom-marker-icon",
      iconAnchor: [10, 20]
    });

    const markers = locations.map(location => L.marker(location.coords, { icon: markerIcon }).addTo(map));

    map.fitBounds(markers.map(m => m.getLatLng()), { padding: [40, 40] });

};


document.addEventListener("DOMContentLoaded", () => {
    initLeafletLocationsMap();
});