// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return; // Skip empty hashes
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Advanced Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in class styling and observe elements
const elementsToObserve = document.querySelectorAll(
    '.skill-card, .education-card, .project-card, .contact-card, .stat'
);

elementsToObserve.forEach(element => {
    observer.observe(element);
});

// Add CSS class for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: slideUp 0.6s ease-out !important;
    }
`;
document.head.appendChild(style);

// Parallax scrolling effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// Add button ripple effect
document.querySelectorAll('.cta-button, .project-link, .contact-button').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple effect CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .cta-button, .project-link, .contact-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Project modal logic
const modalOverlay = document.createElement('div');
modalOverlay.className = 'modal-overlay';
modalOverlay.innerHTML = `<div class="modal" role="dialog" aria-modal="true"><button id="modalClose" style="float:right;background:none;border:none;font-size:20px;">&times;</button><div id="modalContent"></div></div>`;
document.body.appendChild(modalOverlay);

function openProjectModal(id) {
    const content = document.getElementById('modalContent');
    if (id === 'portfolio') {
        content.innerHTML = `<h2>Personal Portfolio</h2><p>A polished portfolio highlighting projects, skills, and contact information. Built with performance and accessibility in mind.</p>`;
    } else if (id === 'todo') {
        content.innerHTML = `<h2>Task Manager App</h2><p>Simple SPA with task CRUD, drag-and-drop sorting, and local persistence.</p>`;
    } else if (id === 'mini-ecom') {
        content.innerHTML = `<h2>Mini E‑commerce</h2><p>Responsive product listing, cart interactions, and checkout flow demo.</p>`;
    } else {
        content.innerHTML = `<h2>Project</h2><p>Details coming soon.</p>`;
    }
    modalOverlay.style.display = 'flex';
}

document.addEventListener('click', (e) => {
    if (e.target.matches('.view-project')) {
        e.preventDefault();
        const card = e.target.closest('.project-card');
        const id = card ? card.getAttribute('data-project') : null;
        openProjectModal(id);
    }
    if (e.target.id === 'modalClose' || e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const status = document.getElementById('formStatus');
        if (!name || !email || !message) {
            status.textContent = 'Please fill all fields.';
            return;
        }
        // Fallback: open mail client
        const subject = encodeURIComponent(`Portfolio message from ${name}`);
        const body = encodeURIComponent(message + '\n\n' + name + '\n' + email);
        window.location.href = `mailto:akshithamagendhiran@gmail.com?subject=${subject}&body=${body}`;
        status.textContent = 'Opening mail client...';
    });
}
