const lettersLink = document.getElementById('dropdown-letters');
const numbersLink = document.getElementById('dropdown-numbers');

const lettersList = document.getElementById('letters');
const numbersList = document.getElementById('numbers');

lettersLink.addEventListener('click', () => {
    lettersList.classList.remove('hidden');
    numbersList.classList.add('hidden');
    });

numbersLink.addEventListener('click', () => {
    lettersList.classList.add('hidden');
    numbersList.classList.remove('hidden');
    });