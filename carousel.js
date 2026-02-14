let slideIndex = 0;

const slides = document.querySelectorAll(".bf-slide");
const slideContainer = document.querySelector(".bf-slides");
const dots = document.querySelectorAll(".bf-dot");

function showSlide(index){
    if(index >= slides.length) slideIndex = 0;
    if(index < 0) slideIndex = slides.length - 1;

    slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
}

document.querySelector(".bf-next").addEventListener("click", ()=>{
    slideIndex++;
    showSlide(slideIndex);
});

document.querySelector(".bf-prev").addEventListener("click", ()=>{
    slideIndex--;
    showSlide(slideIndex);
});

dots.forEach((dot, i)=>{
    dot.addEventListener("click", ()=>{
        slideIndex = i;
        showSlide(slideIndex);
    });
});

/* auto slide */
setInterval(()=>{
    slideIndex++;
    showSlide(slideIndex);
}, 5000);