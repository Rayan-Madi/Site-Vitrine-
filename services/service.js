// Version ultra-simplifiée
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter un click à tous les boutons d'ajout au panier
    document.querySelectorAll('.contact-btn').forEach(function(btn) {
        btn.onclick = function() {
            alert("Produit ajouté au panier !");
        };
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
});