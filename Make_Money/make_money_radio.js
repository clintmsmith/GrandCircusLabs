const form = document.querySelector("form");
const newCoins = document.querySelector("section");

form.addEventListener("submit", event => {
    event.preventDefault();

    let data = new FormData(form)
    let n = data.get("count")
    let coins = data.get("radioButton")
    console.log(coins);
    for (let i = 0; i < n; i++) {
    newCoins.innerHTML += `<div class=${coins}></div>`
    }
})

newCoins.addEventListener('click', function coins(event){
    event.target.remove();
});