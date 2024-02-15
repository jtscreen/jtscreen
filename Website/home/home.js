let currentIndex = 0;
const images = document.querySelectorAll('.carouselimg');

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}


function nextImage() { 
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}
/*
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}
*/
function autoSlide(){nextImage();}

// Show the initial image
showImage(currentIndex);

setInterval(autoSlide, 8000);