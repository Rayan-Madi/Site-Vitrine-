document.addEventListener('DOMContentLoaded', function() {
    // Récupération du formulaire
    const contactForm = document.getElementById('contact-form');
    const notification = document.getElementById('notification');
    const closeButton = document.getElementById('close-notification');
    
    // Ajout d'un événement de soumission au formulaire
    contactForm.addEventListener('submit', function(event) {
        // Empêcher le comportement par défaut (rechargement de la page)
        event.preventDefault();
        
        // Récupération des valeurs du formulaire
        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const email = document.getElementById('email').value;
        const telephone = document.getElementById('telephone').value;
        const sujet = document.getElementById('sujet').value;
        const message = document.getElementById('message').value;
        
        // Afficher une alerte JavaScript standard
        alert("Votre message a été envoyé avec succès!");
        
        // Affichage de la notification stylisée
        notification.classList.add('active');
        
        // Réinitialisation du formulaire
        contactForm.reset();
    });
    
    // Fermeture de la notification
    closeButton.addEventListener('click', function() {
        notification.classList.remove('active');
    });
    
    // Fermeture de la notification si on clique à l'extérieur
    notification.addEventListener('click', function(event) {
        if (event.target === notification) {
            notification.classList.remove('active');
        }
    });
});