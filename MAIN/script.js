document.addEventListener('DOMContentLoaded', function() {
    const lente = document.querySelector('.lente');
    const inputContenitoreCerca = document.querySelector('.input-contenitore-cerca');
    const iconaX = document.querySelector('.icona-x');
    const overlay = document.querySelector('.overlay');
   
  
    // Nascondi inizialmente l'input
    inputContenitoreCerca.style.display = 'none';
    overlay.style.display = 'none';
  
    // Quando si clicca sulla lente
    lente.addEventListener('click', function() {
      lente.style.display = 'none';
      inputContenitoreCerca.style.display = 'flex';
      overlay.style.display = 'block'; 
    });
  
    // Quando si clicca sulla X per chiudere la barra di ricerca
    iconaX.addEventListener('click', function() {
      inputContenitoreCerca.style.display = 'none';
      lente.style.display = 'block';
      overlay.style.display = 'none'; 

    });
  });



 /*let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 7.875 * 16; // 7.875rem in pixel

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        if (window.scrollY < lastScrollY) {
            // Scorrendo verso l'alto, mostra la navbar
            navbar.classList.remove('hidden');
        } else {
            // Scorrendo verso il basso, nasconde la navbar
            navbar.classList.add('hidden');
        }
    } else {
        // Prima di superare la soglia, la navbar rimane visibile
        navbar.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});


 Prove dissolvenza */

 /*let lastScrollPosition = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // Nascondi la navbar quando si scorre verso il basso
       
        navbar.classList.remove('fixed');
    } else {
        // Mostra la navbar quando si scorre verso l'alto
        navbar.classList.remove('hidden');
        navbar.classList.add('fixed');

    }

    lastScrollPosition = currentScrollPosition; // Aggiorna la posizione di scorrimento
});*/

/*let lastScrollPosition = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition === 0) {
        // Rimuovi le classi fixed e hidden quando sei in cima alla pagina
        navbar.classList.remove('fixed', 'hidden');
    } else if (currentScrollPosition > lastScrollPosition) {
        // Nascondi la navbar quando si scorre verso il basso
        navbar.classList.add('hidden');
        navbar.classList.remove('fixed');
    } else {
        // Mostra la navbar quando si scorre verso l'alto
        navbar.classList.remove('hidden');
        navbar.classList.add('fixed');
    }

    lastScrollPosition = currentScrollPosition; // Aggiorna la posizione di scorrimento
});*/

let lastScrollPosition = 0;
const navbar = document.querySelector('.navbar');
const triggerHeight = 7.875 * 16; // Converti 7.875rem in pixel (126 pixel)

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition < triggerHeight) {
        // Rimuovi le classi fixed e hidden se siamo sopra il triggerHeight
        navbar.classList.remove('fixed', 'hidden');
    } else if (currentScrollPosition > lastScrollPosition) {
        // Nascondi la navbar quando si scorre verso il basso
        navbar.classList.add('hidden');
        navbar.classList.remove('fixed');
    } else {
        // Mostra la navbar quando si scorre verso l'alto
        navbar.classList.remove('hidden');
        navbar.classList.add('fixed');
    }

    lastScrollPosition = currentScrollPosition; // Aggiorna la posizione di scorrimento
});



  
