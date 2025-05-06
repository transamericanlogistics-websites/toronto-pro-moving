document.addEventListener('DOMContentLoaded', () => {
    const navHeight = document.querySelector('nav')?.offsetHeight || 0;
    document.querySelectorAll('[data-scroll-target]').forEach(el => {
        if (el.tagName === 'A') {
            el.setAttribute('href', 'javascript:void(0)');
            el.style.cursor = 'pointer';
        }
        el.addEventListener('click', (e) => {
            const selector = el.getAttribute('data-scroll-target');
            const target = document.querySelector(selector);
            if (target) {
                e.preventDefault();
                const targetTop = target.getBoundingClientRect().top + window.scrollY;
                const offset = targetTop - navHeight - 10; // 10px extra buffer
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            } else {
                console.warn(`No element found for selector "${selector}"`);
            }
        });
    });
});
