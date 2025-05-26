    // JavaScript pour le formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script contact.js chargé');
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    const notification = document.getElementById('notification');
    const closeNotificationBtn = document.getElementById('close-notification');
    
    // Debug : vérifier que tous les éléments existent
    console.log('Éléments trouvés:', {
        contactForm: !!contactForm,
        notification: !!notification,
        closeNotificationBtn: !!closeNotificationBtn
    });
    
    // Soumission du formulaire
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulaire soumis');
            
            // Validation basique
            const nomInput = document.getElementById('nom');
            const prenomInput = document.getElementById('prenom');
            const emailInput = document.getElementById('email');
            const sujetInput = document.getElementById('sujet');
            const messageInput = document.getElementById('message');
            
            // Vérifier que tous les champs existent
            if (!nomInput || !prenomInput || !emailInput || !sujetInput || !messageInput) {
                console.error('Un ou plusieurs champs du formulaire sont introuvables');
                alert('Erreur : formulaire incomplet');
                return;
            }
            
            const nom = nomInput.value.trim();
            const prenom = prenomInput.value.trim();
            const email = emailInput.value.trim();
            const sujet = sujetInput.value.trim();
            const message = messageInput.value.trim();
            
            if (!nom || !prenom || !email || !sujet || !message) {
                alert('Veuillez remplir tous les champs obligatoires.');
                return;
            }
            
            // Afficher la notification SEULEMENT si elle existe
            if (notification) {
                notification.classList.add('show');
                console.log('Notification affichée');
            } else {
                console.error('Élément notification introuvable');
                alert('Message envoyé avec succès !'); // Fallback
            }
            
            // Réinitialiser le formulaire
            this.reset();
        });
    } else {
        console.error('Formulaire de contact introuvable');
    }
    
    // Fermer la notification
    if (closeNotificationBtn && notification) {
        closeNotificationBtn.addEventListener('click', function() {
            console.log('Fermeture de la notification');
            notification.classList.remove('show');
        });
    }
    
    // Fermer la notification en cliquant sur le fond
    if (notification) {
        notification.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('show');
            }
        });
    }
    
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    console.log('Menu mobile - Éléments trouvés:', {
        mobileMenuBtn: !!mobileMenuBtn,
        navLinks: !!navLinks
    });
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            console.log('Menu mobile cliqué');
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Animation des champs de formulaire
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    console.log('Champs de formulaire trouvés:', formInputs.length);
    
    formInputs.forEach(function(input, index) {
        console.log('Ajout d\'événements au champ', index);
        
        input.addEventListener('focus', function() {
            if (this.parentElement) {
                this.parentElement.classList.add('focused');
            }
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '' && this.parentElement) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Vérifier si le champ a déjà une valeur au chargement
        if (input.value !== '' && input.parentElement) {
            input.parentElement.classList.add('focused');
        }
    });
    
    console.log('Script contact.js entièrement initialisé');
});

// Test simple pour vérifier que le script se charge
console.log('Fichier contact.js chargé - Test de base OK');
