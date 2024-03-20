document.getElementById("monFormulaire").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    var formData = new FormData(this);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://hook.eu2.make.com/s1t8hwwhevx9mxnpwtm6pvp257d1lgax", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert('Formulaire envoyé avec succès!');
                document.getElementById("monFormulaire").reset(); // Réinitialiser le formulaire après l'envoi
            } else {
                console.error('Erreur:', xhr.statusText);
                alert('Une erreur est survenue lors de l\'envoi du formulaire.');
            }
        }
    };
    xhr.send(formData);
});