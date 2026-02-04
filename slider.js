const cards = document.querySelectorAll("#carousel .card");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const navbar = document.getElementById("navbar");

let current = 1; // start with 2nd image centered
let timer = null;

function updateCarousel() {
  cards.forEach((card, index) => {
    if (index === current) {
      card.style.transform = "translateX(0) scale(1)";
      card.style.opacity = "1";
      card.style.zIndex = "3";
    } else if (index === (current - 1 + cards.length) % cards.length) {
      card.style.transform = "translateX(-35%) scale(0.85) rotateY(12deg)";
      card.style.opacity = "0.5";
      card.style.zIndex = "2";
    } else if (index === (current + 1) % cards.length) {
      card.style.transform = "translateX(35%) scale(0.85) rotateY(-12deg)";
      card.style.opacity = "0.5";
      card.style.zIndex = "2";
    } else {
      card.style.transform = "translateX(70%) scale(0.7)";
      card.style.opacity = "0";
      card.style.zIndex = "1";
    }
  });
}

function next() {
  current = (current + 1) % cards.length;
  updateCarousel();
}

function prev() {
  current = (current - 1 + cards.length) % cards.length;
  updateCarousel();
}

function startAuto() {
  stopAuto();
  timer = setInterval(next, 3500);
}

function stopAuto() {
  if (timer) clearInterval(timer);
}

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

document.getElementById("carousel").addEventListener("mouseenter", stopAuto);
document.getElementById("carousel").addEventListener("mouseleave", startAuto);

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

updateCarousel();
startAuto();
