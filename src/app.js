// menu mobile
const menuToggle = document.getElementById('menuToggle');
const headerMenu = document.getElementById('headerMenu');

if (menuToggle && headerMenu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = headerMenu.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', isOpen);
        menuToggle.querySelector('.material-symbols-outlined').textContent = isOpen ? 'close' : 'menu';
    });

    headerMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            headerMenu.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.querySelector('.material-symbols-outlined').textContent = 'menu';
        });
    });
}

// animação de entrada ao rolar a página
const animatedEls = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

animatedEls.forEach((el) => observer.observe(el));