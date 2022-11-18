let slide1 = document.getElementById("slide1");
// let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");

let slideIndex = 1;
showSlides(slideIndex);


//function for slideshow h6 onclicks

// function slideOne(){
//     showSlides[0];
// }

// function slideTwo(){
//     showSlides[1];
// }

// function slideThree(){
//     showSlides[2];
// }



// let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}



// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}

