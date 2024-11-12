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


  
  
/* // script.js

 let lastScrollTop = 0;

 const navbar = document.querySelector('.navbar');
 const navbarTop = document.querySelector('.navbar-top');
 const navbarBottom = document.querySelector('.navbar-bottom');
 
 window.addEventListener('scroll', function() {
   const currentScroll = window.scrollY || document.documentElement.scrollTop;
 
   if (currentScroll > lastScrollTop) 
    {navbarBottom.style.display = "none"; // Usa il valore originale di display
      navbarTop.style.display = 'none';    // Usa il valore originale di display
    }
    else
     // Scorrimento verso l'alto - mostra la navbar
     {navbarBottom.style.display = "flex"; // Usa il valore originale di display
     navbarTop.style.display = 'flex';    // Usa il valore originale di display
   }
   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valori negativi
 });
 
*/