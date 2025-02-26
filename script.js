// Exemple de fonctionnalité JavaScript pour le formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche l'envoi du formulaire

    // Récupère les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Affiche les valeurs dans la console (à remplacer par un envoi réel)
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Affiche un message de confirmation
    alert('Merci pour votre message, ' + name + ' ! Je vous répondrai dès que possible.');

    // Réinitialise le formulaire
    document.getElementById('contact-form').reset();
});