// Movement Animation

const card = document.querySelector(".card");
const container = document.querySelector(".container");
const sneaker = document.querySelector(".sneaker img");
const circle = document.querySelector(".circle");
const title = document.querySelector(".title");
const details = document.querySelector(".details");
const price = document.querySelector(".price");
const nonactive = document.querySelector(".nonactive");
const active = document.querySelector(".active");
const purchase = document.querySelector(".purchase");

container.addEventListener("mousemove", (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 15;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    circle.style.animation = "slide ease-in-out 20s infinite";
   
    //Popout
    sneaker.style.transform = "translateZ(110px) rotate(45deg) scale(1.3)";
    title.style.transform = "translateZ(70px)";
    details.style.transform = "translateZ(50px)";
    price.style.transform = "translateZ(60px)";
    active.style.transform = "translateZ(50px) scale(1.1)";
    purchase.style.transform = "translateZ(60px)";


});

//Animate Out
container.addEventListener("mouseleave", (e) => {
    circle.style.animation = "none";
    card.style.transition = " all 0.5s ease";
    card.style.transform =  `rotateY(0deg) rotateX(0deg)`;

    //Popback
    sneaker.style.transform = "translateZ(0px) rotate(0deg)";
    title.style.transform = "translateZ(0px)";
    details.style.transform = "translateZ(0px)";
    price.style.transform = "translateZ(0px)";
    active.style.transform = "translateZ(0px) ";
    purchase.style.transform = "translateZ(0px)";
});