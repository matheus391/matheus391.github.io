// Mobile menu toggle
var menuToggle = document.querySelector('.menu-toggle');
var navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
}
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var href = anchor.getAttribute('href');
        if (href) {
            var target = document.querySelector(href);
            if (target) {
                // Melhor alinhamento com offset para navbar/padding
                var targetRect = target.getBoundingClientRect();
                var offset = 100; // Ajuste este valor conforme necessário
                window.scrollTo({
                    top: window.pageYOffset + targetRect.top - offset,
                    behavior: 'smooth'
                });
                // Close mobile menu after clicking a link
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        }
    });
});
// Add animation to show cards when they come into view
var observerOptions = {
    threshold: 0.1
};
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
// Observe all show cards
document.querySelectorAll('.show-card').forEach(function (card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});
// Form submission handling
var contactForm = document.querySelector('.contato-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Here you would typically handle the form submission
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    });
}
// Add hover effect to social media links
document.querySelectorAll('.social-links a').forEach(function (link) {
    link.addEventListener('mouseenter', function () {
        link.style.transform = 'scale(1.2)';
    });
    link.addEventListener('mouseleave', function () {
        link.style.transform = 'scale(1)';
    });
});
