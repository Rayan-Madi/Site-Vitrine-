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
            


