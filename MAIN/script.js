// script.js
const moveLeftButton = document.getElementById("move-left");
const moveRightButton = document.getElementById("move-right");
const cardCaroselloWrapper = document.querySelector(".card");

function moveCards(distance) {
    cardCaroselloWrapper.scrollBy({
        left: distance,
        behavior: 'smooth' 
    });
}


moveLeftButton.addEventListener("click", function() {
    moveCards(-900); 
});

moveRightButton.addEventListener("click", function() {
    moveCards(900); 
});


cardCaroselloWrapper.addEventListener("scroll", function() {
    
    const scrollLeft = cardCaroselloWrapper.scrollLeft;
    const maxScrollLeft = cardCaroselloWrapper.scrollWidth - cardCaroselloWrapper.clientWidth;

    
    moveLeftButton.style.opacity = scrollLeft > 0 ? 1 : 0.5; 
    moveRightButton.style.opacity = scrollLeft < maxScrollLeft ? 1 : 0.5; 
});
