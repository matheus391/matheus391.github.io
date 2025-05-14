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
    (anchor as HTMLElement).addEventListener('click', (e) => {
        e.preventDefault();
        const href = (anchor as HTMLElement).getAttribute('href');
        if (href) {
            const target = document.querySelector(href);
            // Melhor alinhamento com offset para navbar/padding
          const targetRect = target ? target.getBoundingClientRect() : null;
const offset = 100; // Ajuste este valor conforme necessário
window.scrollTo({
    _top: window.pageYOffset + targetRect.top - offset,
    get top() {
        return this._top;
    },
    set top(value) {
        this._top = value;
    },
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