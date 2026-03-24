document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log("Tentative d'envoi...");

        const data = new FormData(form);
        
        
        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            form.reset();
            window.location.href = "form-envoie.html";
        } else {
            alert("Erreur lors de l'envoi (Statut : " + response.status + ")");
        }
    });
});