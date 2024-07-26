const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
let currentSlideIndex = 0;

// Create dots based on the number of slides
slides.forEach((slide, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("dot_selected"); // Set the first dot as active by default
  dot.setAttribute("data-index", index);
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");



function showSlide(index) {
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerText.innerHTML = slides[index].tagLine;

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("dot_selected", dotIndex === index);
  });
}

arrowLeft.addEventListener("click", () => {
  currentSlideIndex =
    currentSlideIndex > 0 ? currentSlideIndex - 1 : slides.length - 1;
  showSlide(currentSlideIndex);
});

arrowRight.addEventListener("click", () => {
  currentSlideIndex =
    currentSlideIndex < slides.length - 1 ? currentSlideIndex + 1 : 0;
  showSlide(currentSlideIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
  });
});

// Initialize the first slide
showSlide(currentSlideIndex);
