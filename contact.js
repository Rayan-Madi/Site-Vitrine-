   // JavaScript pour le formulaire de contact avec alerte de confirmation
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
            
            // Récupération des éléments du formulaire
            const nomInput = document.getElementById('nom');
            const prenomInput = document.getElementById('prenom');
            const emailInput = document.getElementById('email');
            const telephoneInput = document.getElementById('telephone');
            const sujetInput = document.getElementById('sujet');
            const messageInput = document.getElementById('message');
            
            // Vérifier que tous les champs obligatoires existent
            if (!nomInput || !prenomInput || !emailInput || !sujetInput || !messageInput) {
                console.error('Un ou plusieurs champs du formulaire sont introuvables');
                alert('❌ Erreur : formulaire incomplet');
                return;
            }
            
            // Récupération des valeurs
            const nom = nomInput.value.trim();
            const prenom = prenomInput.value.trim();
            const email = emailInput.value.trim();
            const telephone = telephoneInput ? telephoneInput.value.trim() : '';
            const sujet = sujetInput.value.trim();
            const message = messageInput.value.trim();
            
            // Validation des champs obligatoires
            if (!nom || !prenom || !email || !sujet || !message) {
                alert('⚠️ Veuillez remplir tous les champs obligatoires (Nom, Prénom, Email, Sujet et Message).');
                return;
            }
            
            // Validation de l'email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('⚠️ Veuillez entrer une adresse email valide.');
                return;
            }
            
            // Validation du téléphone (si rempli)
            if (telephone && telephone.length > 0) {
                const phoneRegex = /^[0-9+\-\s()]+$/;
                if (!phoneRegex.test(telephone)) {
                    alert('⚠️ Le numéro de téléphone contient des caractères non valides.');
                    return;
                }
            }
            
            // Si toutes les validations passent, afficher l'alerte de succès
            const successMessage = `✅ Formulaire envoyé avec succès !
            
📝 Récapitulatif de votre message :
• Nom : ${nom}
• Prénom : ${prenom}
• Email : ${email}
${telephone ? `• Téléphone : ${telephone}` : ''}
• Sujet : ${sujet}
• Message : ${message.substring(0, 50)}${message.length > 50 ? '...' : ''}

💬 Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
            
Merci de nous avoir contactés !`;
            
            alert(successMessage);
            
            // Afficher également la notification stylée si elle existe
            if (notification) {
                notification.classList.add('show');
                console.log('Notification affichée');
            }
            
            // Réinitialiser le formulaire après la confirmation
            this.reset();
            
            // Retirer la classe focused des groupes de formulaire
            const focusedGroups = document.querySelectorAll('.form-group.focused');
            focusedGroups.forEach(group => {
                group.classList.remove('focused');
            });
            
            console.log('Formulaire réinitialisé avec succès');
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
    
    // Fonction pour valider en temps réel
    function validateField(input, errorMessage) {
        const value = input.value.trim();
        if (value === '') {
            input.style.borderColor = '#ff6b6b';
            return false;
        } else {
            input.style.borderColor = '#d4b854';
            return true;
        }
    }
    
    // Validation en temps réel pour l'email
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value.trim() !== '' && !emailRegex.test(this.value)) {
                this.style.borderColor = '#ff6b6b';
            } else if (this.value.trim() !== '') {
                this.style.borderColor = '#d4b854';
            }
        });
    }
    
    console.log('Script contact.js entièrement initialisé avec validation améliorée');
});

// Fonction utilitaire pour afficher des messages personnalisés
function showCustomAlert(title, message, type = 'success') {
    const icons = {
        success: '✅',
        warning: '⚠️',
        error: '❌',
        info: 'ℹ️'
    };
    
    const icon = icons[type] || icons.info;
    alert(`${icon} ${title}\n\n${message}`);
}

// Test simple pour vérifier que le script se charge
console.log('Fichier contact.js chargé - Version améliorée avec alerte de confirmation');
