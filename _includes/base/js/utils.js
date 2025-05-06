document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-scroll-target]').forEach(el => {
        if (el.tagName === 'A') {
            el.setAttribute('href', 'javascript:void(0)');
        }
        el.addEventListener('click', (e) => {
            const selector = el.getAttribute('data-scroll-target');
            const target = document.querySelector(selector);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
});
