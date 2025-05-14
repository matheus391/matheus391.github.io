// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target as Node) && !navLinks.contains(e.target as Node)) {
            navLinks.classList.remove('active');
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) => {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Melhor alinhamento com offset para navbar/padding
            const targetRect = target.getBoundingClientRect();
            const offset = 100; // Ajuste este valor conforme necessário
            window.scrollTo({
                top: window.pageYOffset + targetRect.top - offset,
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Add animation to show cards when they come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all show cards
document.querySelectorAll('.show-card').forEach(card => {
    (card as HTMLElement).style.opacity = '0';
    (card as HTMLElement).style.transform = 'translateY(20px)';
    (card as HTMLElement).style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Form submission handling
const contactForm = document.querySelector('.contato-form') as HTMLFormElement;
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    });
}

// Add hover effect to social media links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        (link as HTMLElement).style.transform = 'scale(1.2)';
    });
    link.addEventListener('mouseleave', () => {
        (link as HTMLElement).style.transform = 'scale(1)';
    });
}); 