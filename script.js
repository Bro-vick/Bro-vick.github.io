let menuBtn = document.querySelector(".menu-btn");
let navCard = document.querySelector(".nav-card");
let closeBtn = document.querySelector(".remove-nav-card-btn")

menuBtn.addEventListener("click",displayNavCard);
closeBtn.addEventListener("click",closeButton)

function displayNavCard(){
    navCard.classList.add("display");
}
function closeButton () {
    navCard.classList.remove("display")
}