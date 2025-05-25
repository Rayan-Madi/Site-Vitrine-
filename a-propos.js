// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle du menu mobile
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Fermer le menu mobile quand on clique sur un lien
    const navLinksItems = document.querySelectorAll('.nav-links li a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });

    // Fermer le menu mobile si on clique ailleurs
    document.addEventListener('click', function(e) {
        if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// Animation des éléments au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.content-section, .value-item');
    
    elementsToAnimate.forEach((element, index) => {
        // Ajouter un délai progressif pour chaque élément
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        observer.observe(element);
    });
});

// Effet de parallaxe léger sur le background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.body;
    const speed = scrolled * 0.5;
    
    parallax.style.backgroundPosition = `center ${speed}px`;
});

// Animation des icônes de valeurs au hover
document.addEventListener('DOMContentLoaded', function() {
    const valueItems = document.querySelectorAll('.value-item');
    
    valueItems.forEach(item => {
        const icon = item.querySelector('.value-icon');
        
        item.addEventListener('mouseenter', function() {
            icon.style.transform = 'scale(1.1) rotate(10deg)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Effet de typing pour le titre principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Démarrer l'effet de typing après le chargement
window.addEventListener('load', function() {
    const title = document.querySelector('.title');
    const originalText = title.textContent;
    
    setTimeout(() => {
        typeWriter(title, originalText, 80);
    }, 500);
});

// Smooth scroll pour les ancres (si vous en ajoutez)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Ajouter une classe active à la navbar au scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.8)';
        navbar.style.backdropFilter = 'blur(15px)';
    }
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// Console log pour debug (à supprimer en production)
console.log('✨ ÉLÉGANCE - À propos page loaded successfully!');

// Gestion des erreurs globales
window.addEventListener('error', function(e) {
    console.error('Erreur détectée sur la page À propos:', e.error);
});

// Performance monitoring (optionnel)
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`⚡ Page chargée en ${Math.round(loadTime)}ms`);
});