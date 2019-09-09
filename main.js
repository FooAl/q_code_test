let position = 0;
window.addEventListener('DOMContentLoaded', event => {
    currentSlide(position)
});

function prevSlide(){
    position -= 1;
    currentSlide(position);
}
function nextSlide(){
    position += 1;
    currentSlide(position);
}

function currentSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let track = document.getElementsByClassName("carousel_track");
    if (n > slides.length - 1) position = 0;
    if (n < 0) position = slides.length - 1;
    track[0].className = `carousel_track pos${position}`
}
