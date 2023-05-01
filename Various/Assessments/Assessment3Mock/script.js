const form = document.getElementById('form');
const placeholder = document.getElementById('placeholder');
const shapes = document.querySelectorAll('shape');

form.addEventListener("submit", submitForm);

function submitForm (event) {
    event.preventDefault();

    let data = new FormData(form);
    let text = data.get('textInput');
    let size = data.get('sizeInput');
    let isChecked = data.get('checkInput');

    let createDiv = document.createElement('div');
    createDiv.classList.add('shape');
    createDiv.innerText = text;
    createDiv.style.height = size + 'px';
    createDiv.style.width = size + 'px';
    createDiv.style.lineHeight = size + 'px';

    if(isChecked) {
        createDiv.classList.add('circle');
    }

    placeholder.appendChild(createDiv);
    form.reset();
}

placeholder.addEventListener('click', function highlight(event){
    event.target.classList.add('highlighted');
});