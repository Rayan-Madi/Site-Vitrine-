      // JavaScript pour le formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    const notification = document.getElementById('notification');
    const closeNotificationBtn = document.getElementById('close-notification');
    
    // Soumission du formulaire
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validation basique
        const nom = document.getElementById('nom').value.trim();
        const prenom = document.getElementById('prenom').value.trim();
        const email = document.getElementById('email').value.trim();
        const sujet = document.getElementById('sujet').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!nom || !prenom || !email || !sujet || !message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        // Afficher la notification (utilise la classe 'show' comme dans le CSS)
        notification.classList.add('show');
        
        // Réinitialiser le formulaire
        this.reset();
    });
    
    // Fermer la notification
    closeNotificationBtn.addEventListener('click', function() {
        notification.classList.remove('show');
    });
    
    // Fermer la notification en cliquant sur le fond
    notification.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('show');
        }
    });
    
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Animation des champs de formulaire
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Vérifier si le champ a déjà une valeur au chargement
        if (input.value !== '') {
            input.parentElement.classList.add('focused');
        }
    });
});
