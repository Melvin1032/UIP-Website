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

let slideIndexPrograms = 0;

function showProgramSlides() {
    let slides = document.getElementsByClassName("mySlides2");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        slides[i].style.transition = "opacity 1s ease-in-out";
        slides[i].style.display = "none";
    }

    slideIndexPrograms++;
    if (slideIndexPrograms > slides.length) {
        slideIndexPrograms = 1;
    }

    slides[slideIndexPrograms - 1].style.display = "block";
    setTimeout(() => {
        slides[slideIndexPrograms - 1].style.opacity = "1";
    }, 50);

    setTimeout(showProgramSlides, 6000); 
}

showProgramSlides();

