document.querySelector("form").addEventListener("submit", function (event){
    event.preventDefault();

    let data = new FormData(document.querySelector("form"))
    let n = data.get("howmany")
    let coins = data.get("cointype")
    for (let i = 0; i < n; i++) {
        document.querySelector("section").innerHTML += `<div class="coinmaker ${coins}"></div>`
    }
})

document.querySelector("#deletecoin").addEventListener('click', function coins(event){
    event.target.remove();
});
