document.addEventListener("DOMContentLoaded", () => {
    // pull your array of locations from config
    const locations = [
        {% for loc in locs %}
        { name: "{{ loc.name }}", coords: [{{ loc.coordinates }}] }{% unless forloop.last %},{% endunless %}
        {% endfor %}
    ];

    // init map
    const map = L.map("locations-map");

    // tile layer URL from config, or default OSM
    {% if site.locations.map_theme_url %}
        var tileUrl = "{{ site.locations.map_theme_url }}";
    {% else %}
        var tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    {% endif %}

    var attribution = "{{ site.locations.map_theme_attribution | default: '&copy; OpenStreetMap contributors' }}";
    L.tileLayer(tileUrl, { attribution }).addTo(map);

    // single‐config marker color
    const markerIconClass = "{{ site.locations.map_marker_icon | default: 'fa-solid fa-location-dot' }}"
    const markerColor = "{{ site.locations.map_marker_color | default: '#960A0A' }}";
    const markerIcon = L.divIcon({
        html: `<i class="${markerIconClass}" style="color: ${markerColor}; font-size:2.5rem; filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5));"></i>`,
        className: "custom-marker-icon",
        iconAnchor: [10, 20]
    });

    // add markers & collect them for bounds
    const markers = locations.map(loc => L.marker(loc.coords, { icon: markerIcon }).addTo(map));

    // auto‐fit to all markers
    map.fitBounds(markers.map(m => m.getLatLng()), { padding: [40, 40] });
});