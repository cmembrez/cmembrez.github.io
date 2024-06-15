let slideIndex = 0;

// At page initial load, show first slides.
plusSlides('projectArEscapeRoomSlideshow', 0);
plusSlides('projectCaiusAdventuresVr', 0);
plusSlides('project2DGAmeSpaceInvaderLudi', 0);


// Next/previous controls
function plusSlides(parentId, stepSize) {
  let parent = document.getElementById(parentId);    
  let childrenMySlide = parent.querySelectorAll("div.mySlide");

  slideIndex += stepSize;
  showSlides(childrenMySlide, slideIndex);
}

function showSlides(containerSlides, n) {
  let otherSlidesIndex;

  // slides boundaries
  if (n >= containerSlides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = containerSlides.length - 1}

  // Hide others
  for (otherSlidesIndex = 0; otherSlidesIndex < containerSlides.length; otherSlidesIndex++) {
    containerSlides[otherSlidesIndex].style.display = "none";
  }

  // Show this slide
  containerSlides[slideIndex].style.display = "block";
}