const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", function(event){
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
});