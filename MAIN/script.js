
//Sezione della lente
document.addEventListener('DOMContentLoaded', function() {
    const lente = document.querySelector('.lente');
    const inputContenitoreCerca = document.querySelector('.input-contenitore-cerca');
    const iconaX = document.querySelector('.icona-x');
    const overlay = document.querySelector('.overlay');
   
  
    // Nasconde inizialmente l'input
    inputContenitoreCerca.style.display = 'none';
    overlay.style.display = 'none';
  
    // Quando si clicca sulla lente
    lente.addEventListener('click', function() {
      lente.style.display = 'none';
      inputContenitoreCerca.style.display = 'flex';
      overlay.style.display = 'block'; 
      document.body.classList.add('no-scroll');
    });
  
    // Quando si clicca sulla X 
    iconaX.addEventListener('click', function() {
      inputContenitoreCerca.style.display = 'none';
      lente.style.display = 'block';
      overlay.style.display = 'none'; 
      document.body.classList.remove('no-scroll');

    });
  });

//fINE SEZIONE LENTE

//Inizio sezione dissolvenza

let lastScrollPosition = 0;
const navbar = document.querySelector('.navbar');
const triggerHeight = 126; 

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition < triggerHeight) {
        // Rimuovi le classi fixed e hidden se siamo sopra il triggerHeight
        navbar.classList.remove('fixed','hidden');
    } 
    
    else if (currentScrollPosition > lastScrollPosition) {
        // Nascondi la navbar quando si scorre verso il basso
        navbar.classList.add( 'hidden');
        //navbar.classList.remove('fixed');
    } else {
        // Mostra la navbar quando si scorre verso l'alto
        navbar.classList.remove('hidden');
        navbar.classList.add('fixed');
        //Portare il correnscroll = 0 e disattivare il fixed solo in quel caso
    }

    lastScrollPosition = currentScrollPosition; // Aggiorna la posizione di scorrimento
});

//Fine sezione dissolvenza