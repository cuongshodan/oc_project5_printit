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

arrowLeft.addEventListener("click", () => {
  console.log("Left arrow clicked");
});

arrowRight.addEventListener("click", () => {
  console.log("Right arrow clicked");
});


// Create dots based on the number of slides
slides.forEach((slide, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("dot_selected"); // Set the first dot as active by default
  dot.setAttribute("data-index", index);
  dotsContainer.appendChild(dot);
});
