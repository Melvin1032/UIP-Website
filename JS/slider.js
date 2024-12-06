let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";  
        slides[i].style.transition = "opacity 1s ease-in-out"; 
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";  
    setTimeout(() => {
        slides[slideIndex - 1].style.opacity = "1"; 
    }, 50); 

    setTimeout(showSlides, 6000);
}

showSlides();
