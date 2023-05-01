function changeColor(color){
    document.body.style.background = color;

    // Selected color add class .active
    document.querySelectorAll('span').forEach(function(item) {
    item.classList.remove('active');
    })
    event.target.classList.add('active');
}