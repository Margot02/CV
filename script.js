// Code du menu déroulant
var menu = document.querySelector(".menu");
var menu_deroulant = document.querySelector(".menu-deroulant");
var menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector(".menu-liste");

menu_deroulant.onclick = function () {
  menu_deroulant.classList.toggle("active");
  menuList.classList.toggle("active");
  menu.classList.toggle("deroulant");
  menuIcon.classList.toggle("hide");
};

//  carousel photos

const track = document.querySelector(".gallerie");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".button.second");
const prevButton = document.querySelector(".button");

let currentIndex = 0;

function updateSlidePosition() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  if (slides.length > 0) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = "translateX(-" + slideWidth * currentIndex + "px)";
  }
  track.style.transform = "translateX(-" + slideWidth * currentIndex + "px)";
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
});
