let slideIndex = 1;
currentSlide(1);
showSlides(slideIndex);


//TODO: // Find all slideshow-container 
var slideshowContainers = document.getElementsByClassName("slideshow-container")
slideshowContainers.forEach(slideshow => {
});


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slideIndex;

  let slides = document.getElementsByClassName("mySlide");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (slideIndex = 0; slideIndex < slides.length; slideIndex++) {
    slides[slideIndex].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";

}