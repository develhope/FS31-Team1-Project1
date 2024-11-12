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


  
  