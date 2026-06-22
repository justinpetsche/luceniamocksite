// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Apply fade-in to key elements
document.querySelectorAll(
    '.section-eyebrow, .section-title, .section-title-xl, .section-title-left, ' +
    '.section-subtitle, .section-subtitle-lg, ' +
    '.agent-card, .capability-card, .deploy-card, .gap-item, .tier, ' +
    '.cost-stat, .trust-box, .trust-arrow, ' +
    '.solution-boundary, .solution-outside, ' +
    '.founder-content, .book-card, ' +
    '.hero-title, .hero-subtitle, .hero-ctas, .hero-proof'
).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Stagger animations for grid items
document.querySelectorAll('.agents-grid, .capabilities-grid, .cost-stats, .gap-right, .tiers-stack').forEach(grid => {
    const children = grid.children;
    Array.from(children).forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.08}s`;
    });
});
