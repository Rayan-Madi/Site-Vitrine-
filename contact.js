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
                showStyledError('Erreur : formulaire incomplet');
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
                showStyledError('Veuillez remplir tous les champs obligatoires (Nom, Prénom, Email, Sujet et Message).');
                return;
            }
            
            // Validation de l'email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showStyledError('Veuillez entrer une adresse email valide.');
                return;
            }
            
            // Validation du téléphone (si rempli)
            if (telephone && telephone.length > 0) {
                const phoneRegex = /^[0-9+\-\s()]+$/;
                if (!phoneRegex.test(telephone)) {
                    showStyledError('Le numéro de téléphone contient des caractères non valides.');
                    return;
                }
            }
            
            // Si toutes les validations passent, afficher la notification stylée
            if (notification) {
                // Mettre à jour le contenu de la notification avec les informations personnalisées
                const notificationContent = notification.querySelector('.notification-content');
                if (notificationContent) {
                    notificationContent.innerHTML = `
                        <h3>✅ Message envoyé avec succès !</h3>
                        <div style="text-align: left; margin: 20px 0; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 8px; border-left: 4px solid #d4b854;">
                            <p style="margin: 5px 0;"><strong>Nom :</strong> ${nom}</p>
                            <p style="margin: 5px 0;"><strong>Prénom :</strong> ${prenom}</p>
                            <p style="margin: 5px 0;"><strong>Email :</strong> ${email}</p>
                            ${telephone ? `<p style="margin: 5px 0;"><strong>Téléphone :</strong> ${telephone}</p>` : ''}
                            <p style="margin: 5px 0;"><strong>Sujet :</strong> ${sujet}</p>
                        </div>
                        <p>Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.</p>
                        <p style="color: #d4b854; font-weight: bold;">Merci de nous avoir contactés !</p>
                        <button id="close-notification" style="padding: 12px 25px; background-color: #d4b854; color: #1a1a1a; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 15px; transition: all 0.3s ease;">Fermer</button>
                    `;
                    
                    // Réattacher l'événement au nouveau bouton de fermeture
                    const newCloseBtn = notificationContent.querySelector('#close-notification');
                    if (newCloseBtn) {
                        newCloseBtn.addEventListener('click', function() {
                            notification.classList.remove('show');
                        });
                        
                        // Effet hover pour le bouton
                        newCloseBtn.addEventListener('mouseenter', function() {
                            this.style.backgroundColor = '#b39a46';
                            this.style.transform = 'translateY(-2px)';
                        });
                        
                        newCloseBtn.addEventListener('mouseleave', function() {
                            this.style.backgroundColor = '#d4b854';
                            this.style.transform = 'translateY(0)';
                        });
                    }
                }
                
                notification.classList.add('show');
                console.log('Notification personnalisée affichée');
            } else {
                console.error('Notification non trouvée, utilisation d\'une alerte de secours');
                alert('✅ Message envoyé avec succès ! Nous vous répondrons bientôt.');
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

// Fonction pour afficher des erreurs avec la notification stylée
function showStyledError(message) {
    const notification = document.getElementById('notification');
    if (notification) {
        const notificationContent = notification.querySelector('.notification-content');
        if (notificationContent) {
            notificationContent.innerHTML = `
                <h3 style="color: #ff6b6b;">⚠️ Attention</h3>
                <p style="color: rgba(255,255,255,0.9); margin: 20px 0;">${message}</p>
                <button id="close-notification" style="padding: 12px 25px; background-color: #ff6b6b; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: all 0.3s ease;">Compris</button>
            `;
            
            // Réattacher l'événement au bouton de fermeture
            const closeBtn = notificationContent.querySelector('#close-notification');
            if (closeBtn) {
                closeBtn.addEventListener('click', function() {
                    notification.classList.remove('show');
                });
                
                // Effet hover pour le bouton d'erreur
                closeBtn.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#e55555';
                    this.style.transform = 'translateY(-2px)';
                });
                
                closeBtn.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = '#ff6b6b';
                    this.style.transform = 'translateY(0)';
                });
            }
        }
        
        notification.classList.add('show');
    } else {
        // Fallback vers alert si la notification n'existe pas
        alert(message);
    }
}

// Fonction utilitaire pour afficher des messages personnalisés (gardée pour compatibilité)
function showCustomAlert(title, message, type = 'success') {
    // Cette fonction utilise maintenant la notification stylée
    showStyledError(`${title}\n\n${message}`);
}

// Test simple pour vérifier que le script se charge
console.log('Fichier contact.js chargé - Version améliorée avec alerte de confirmation');
