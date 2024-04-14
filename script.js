// Navigation menu functionality (example)
document.addEventListener('DOMContentLoaded', () => {
    const navigationMenu = document.getElementById('navigation-menu');
    navigationMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const targetSection = document.querySelector(e.target.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


