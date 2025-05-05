document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-scroll-target]').forEach(el => {
        el.addEventListener('click', (e) => {
        const selector = el.getAttribute('data-target');
        const target = document.querySelector(selector);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        });
    });
});