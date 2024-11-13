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

  let lastScrollPosition = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
        // Nascondi la navbar quando si scorre verso il basso
        navbar.classList.add('hidden');
    } else {
        // Mostra la navbar quando si scorre verso l'alto
        navbar.classList.remove('hidden');
    }

    lastScrollPosition = currentScrollPosition; // Aggiorna la posizione di scorrimento
});

  
