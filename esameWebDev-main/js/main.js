// Funzione per lo scrolling fluido tra le sezioni
// Questa funzione seleziona tutti i link con l'attributo href che inizia con "#" (ancore interne)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previene il comportamento predefinito del link
        // Scorre verso l'elemento di destinazione in modo fluido
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Comportamento dello scrolling
        });
    });
});

// Funzione per validare il modulo di contatto
// Controlla che tutti i campi richiesti siano compilati prima dell'invio
const form = document.querySelector('form'); // Seleziona il modulo nella pagina

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene l'invio effettivo del modulo al server
    
    // Ottieni i valori dei campi del modulo
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    // Controlla se i campi sono vuoti
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.'); // Mostra un avviso se mancano dati
    } else {
        alert('Thank you for your message!'); // Mostra un messaggio di successo
        form.reset(); // Ripristina i campi del modulo
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    toggleButton.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
        console.log('Dropdown toggled');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close dropdown after click
            dropdownContent.classList.remove('show');
        });
    });
});
