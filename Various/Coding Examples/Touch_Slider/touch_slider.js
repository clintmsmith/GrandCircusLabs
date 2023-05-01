const slider = document.querySelector('.slider-container');

// Array.from takes an iterable list, in this case everything
// with the class "slide" and creates an Array from that
const slides = Array.from(document.querySelectorAll('.slide'));

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    previousTranslate = 0,
    animationID = 0,
    currentIndex = 0

slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')
    // This prevents the default behavior from happening
    // Normally, if you click and hold an image, then drag, you will see a phantom image
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())

    // Touch Events (mobile devices)
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)

    // Mouse Events (desktop devices)
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)
})

// Disable the right click menu appearing based on mobile / desktop device
window.oncontextmenu = function(event) {
    event.preventDefault()
    event.stopPropogation()
    return false
}

function touchStart(index) {
    return function(event) {
        currentIndex = index;
        startPos = getPositionX(event)
        console.log(startPos)
        isDragging = true;

        // https://css-tricks.com/using-requestanimationframe/
        animationID = requestAnimationFrame(animation)
        slider.classList.add('grabbing');
    }
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    const movedBy = currentTranslate - previousTranslate;
    // This checks if you have moved the current slide by a certain amount
    // AND if the slide isn't the last one in the array
    if(movedBy < -100 && currentIndex < slides.length - 1){
        currentIndex += 1
    }

    // This checks if you have moved the current slide by a certain amount
    // AND if the slide isn't the first one in the array
    if(movedBy > 100 && currentIndex > 0){
        currentIndex -= 1
    }

    setPositionByIndex()

    slider.classList.remove('grabbing');
}

function touchMove(event) {
    if(isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = previousTranslate + currentPosition - startPos
    }
}

function animation(){
    setSliderPosition()
    if(isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`
}

// This shifts the current slide into position
function setPositionByIndex(){
    currentTranslate = currentIndex * -window.innerWidth;
    previousTranslate = currentTranslate;
    setSliderPosition();
}