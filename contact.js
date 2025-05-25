        // JavaScript pour le formulaire de contact
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Afficher la notification
            document.getElementById('notification').classList.add('active');
            
            // Réinitialiser le formulaire
            this.reset();
        });

        // Fermer la notification
        document.getElementById('close-notification').addEventListener('click', function() {
            document.getElementById('notification').classList.remove('active');
        });

        // Menu mobile
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });