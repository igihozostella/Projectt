const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue
("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function (){
    sliderContainer.style.transform  = `translateX(-${sliderContainer.children[currentSlidePos].
    offsetLeft}px)`;
}


const slideNext = function (){
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if(slideEnd){
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }
    moveSliderItem();
}
sliderNextBtn.addEventListener("click", slideNext);


const slidePrev = function (){

    if(currentSlidePos <= 0){
        currentSlidePos = totalSlidableItems;
    } else {
        currentSlidePos--;
    }
    moveSliderItem();
}
sliderPrevBtn.addEventListener("click", slidePrev);


window.addEventListener("resize", function() {
    totalSliderVisibleItems = Number(this.getComputedStyle(slider).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer.childElementCount - totalSlidableItems;

    moveSliderItem();
});
window.addEventListener('scroll',function(){
    var header = this.document.querySelector('header');
    header.classList.toggle('sticky',window.scroll > 0);
});

function toggleMenu(){
    const toggleMenu = document.querySelector('.toggleMenu')
    const nav = document.querySelector('.nav-bar');
    toggleMenu.classList.toggle('active')
    nav.classList.toggle('active')
}
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}