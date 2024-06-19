// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Fade in sections on load
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.opacity = 1;
    });

    // Smooth scroll
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
