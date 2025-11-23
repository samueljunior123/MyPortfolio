function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Toggle hamburger menu
function toggleMenu(menu) {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    menu.classList.toggle('open');
}

// Close menu when a nav link is clicked
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        const menuToggle = document.querySelector('.menu-toggle');
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });
});

// Scroll reveal effect
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight - 100;
        if(sectionTop < triggerBottom) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

