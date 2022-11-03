let clickButton = document.querySelector("button");

clickButton.addEventListener('click', main);

function main(){
    // Item 1
    let growMe = document.querySelector("#grow-me");
        growMe.classList.add("big");

    // Item 2
    let shrinkMe = document.querySelector("#shrink-me");
        shrinkMe.classList.remove("big");

    // Item 3
    let listMe = document.querySelectorAll('li');
         listMe.forEach(item => {console.log(item.textContent);});
       
    // Item 4
    let linkMe = document.querySelector(".link");
        linkMe.getAttribute("href");
        linkMe.setAttribute("href", "https://www.example.com");
        linkMe.textContent = "somehwere";

    // Item 5
    let hideMe = document.querySelector("#hide-me");
        hideMe.style.display = "none";
    
    // Item 6
    let showMe = document.querySelector("#show-me");
        showMe.style.display = "block";

    // Item 7
    let nameMe = document.getElementById('name').value;
    let welcomeMe = document.querySelector('h1');
    welcomeMe.textContent = `Welcome ${nameMe}`;
}