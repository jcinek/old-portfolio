
// image container and images
const slides = document.querySelector('.mySlides');
const images = document.querySelectorAll('.mySlides img')

// arrow buttons
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

let counter = 1;
let size = images[0].clientWidth;

slides.style.transform = "translateX(" + (-size * counter ) + "px)";

setInterval(function () {
    slides.style.transition = "transform 0.55s ease-in-out";
    counter++;
    slides.style.transform = "translateX(" + (-size * counter ) + "px)";
},5000);

// button listeners
// allows arrows to transition between images

nextBtn.addEventListener("click", ()=> {
    if (counter >= images.length -1) return; // fixes bug that breaks slideshow if user clicks next or prev too quickly
    slides.style.transition = "transform 0.55s ease-in-out";
    counter++;
    slides.style.transform = "translateX(" + (-size * counter ) + "px)";
});

prevBtn.addEventListener("click", ()=> {
    if (counter <= 0) return; // fixes bug that breaks slideshow if user clicks next or prev too quickly
    slides.style.transition = "transform 0.55s ease-in-out";
    counter--;
    slides.style.transform = "translateX(" + (-size * counter ) + "px)";
});

// function to transition back to the first or last image if user reaches beginning or end of slideshow
// removes css transition for seamless effect

slides.addEventListener("transitionend", () => {
    if (images[counter].id === "lastImg") {
        slides.style.transition = "none";
        counter = images.length - 2;
        slides.style.transform = "translateX(" + (-size * counter ) + "px)";
    }
    if (images[counter].id === "firstImg") {
        slides.style.transition = "none";
        counter = images.length - counter;
        slides.style.transform = "translateX(" + (-size * counter ) + "px)";
    }
});

// adds responsiveness to slideshow on page
window.addEventListener("resize", () => {
    slides.style.transition = "none";
    size = images[0].clientWidth;
    slides.style.transform = "translateX(" + (-size * counter ) + "px)";
})