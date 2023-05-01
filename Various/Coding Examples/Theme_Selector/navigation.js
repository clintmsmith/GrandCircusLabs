// This section uses the Event Listener and ties it to the List Item clicked on to
// add the class="active" to the item selected, removes it from the previous
const list = document.querySelectorAll('.list');
const theme = document.querySelectorAll('.theme-image');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
}

list.forEach((item) => 
    item.addEventListener('click', activeLink));

function changeColor(color){
    document.body.style.background = color;
    
    // Selected color add class .active
    document.querySelectorAll('span').forEach(function(item) {
    item.classList.remove('active');
    })
    event.target.classList.add('active');
};

function changeImage(fileName) {
    let img = document.querySelector('#theme-image');
    img.setAttribute("src", fileName);
};




// Grabs the ID on a specific List Item
const home = document.getElementById('home');
const user = document.getElementById('user');
const chat = document.getElementById('chat');
const photos = document.getElementById('photos');
const settings = document.getElementById('settings');
const contentContainer = document.getElementsByClassName('content-container');


// let size = 4;

// // Determines which List Item includes the class "active" and uses
// // that to determine which Array is selected
// if(home.classList.contains ("active")) {
//     let tempArray = [...homeArray];
//     let cardValues = [];
//     size = (size * size) / 2;
//     for(let i = 0; i < size; i++) {
//         const randomIndex = Math.floor(Math.random() * tempArray.length);
//         cardValues.push(tempArray[randomIndex]);
//         tempArray.splice(randomIndex, 1);
//     }
//     return cardValues;
// } else if (user.classList.contains ("active")) {
//         let tempArray = [...userArray];
//         let cardValues = [];
//         size = (size * size) / 2;
//         for(let i = 0; i < size; i++) {
//             const randomIndex = Math.floor(Math.random() * tempArray.length);
//             cardValues.push(tempArray[randomIndex]);
//             tempArray.splice(randomIndex, 1);
//         }
//         return cardValues;
// } else if (chat.classList.contains ("active")) {
//     let tempArray = [...chatArray];
//     let cardValues = [];
//     size = (size * size) / 2;
//     for(let i = 0; i < size; i++) {
//         const randomIndex = Math.floor(Math.random() * tempArray.length);
//         cardValues.push(tempArray[randomIndex]);
//         tempArray.splice(randomIndex, 1);
//     }
//     return cardValues;
// } else if (photos.classList.contains ("active")) {
//     let tempArray = [...photosArray];
//     let cardValues = [];
//     size = (size * size) / 2;
//     for(let i = 0; i < size; i++) {
//         const randomIndex = Math.floor(Math.random() * tempArray.length);
//         cardValues.push(tempArray[randomIndex]);
//         tempArray.splice(randomIndex, 1);
//     }
//     return cardValues;
// } else if (settings.classList.contains ("active")) {
//     let tempArray = [...settingsArray];
//     let cardValues = [];
//     size = (size * size) / 2;
//     for(let i = 0; i < size; i++) {
//         const randomIndex = Math.floor(Math.random() * tempArray.length);
//         cardValues.push(tempArray[randomIndex]);
//         tempArray.splice(randomIndex, 1);
//     }
//     return cardValues;
// };

// // Arrays that are referenced by the code above
// // The hope is that when you change which one is 'active' it will
// // reference the corresponding array to use for the images.
// let homeArray = [
//     {name: "120 Lincoln", image: "./TestImages/home.jpg"},
//     {name: "121 Lincoln", image: "./TestImages/home.jpg"},
//     {name: "122 Lincoln", image: "./TestImages/home.jpg"},
//     {name: "123 Lincoln", image: "./TestImages/home.jpg"},
//     {name: "124 Lincoln", image: "./TestImages/home.jpg"},
//     {name: "125 Lincoln", image: "./TestImages/home.jpg"},
//     {name: "126 Lincoln", image: "./TestImages/home.jpg"},
//     {name: "127 Lincoln", image: "./TestImages/home.jpg"},
//     {name: "128 Lincoln", image: "./TestImages/home.jpg"}
// ];

// let userArray = [
//     {name: "User0", image: "./TestImages/user.jpg"},
//     {name: "User1", image: "./TestImages/user.jpg"},
//     {name: "User2", image: "./TestImages/user.jpg"},
//     {name: "User3", image: "./TestImages/user.jpg"},
//     {name: "User4", image: "./TestImages/user.jpg"},
//     {name: "User5", image: "./TestImages/user.jpg"},
//     {name: "User6", image: "./TestImages/user.jpg"},
//     {name: "User7", image: "./TestImages/user.jpg"},
//     {name: "User8", image: "./TestImages/user.jpg"},
// ]

// let chatArray = [
//     {name: "Chat0", image: "./TestImages/chat.jpg"},
//     {name: "Chat1", image: "./TestImages/chat.jpg"},
//     {name: "Chat2", image: "./TestImages/chat.jpg"},
//     {name: "Chat3", image: "./TestImages/chat.jpg"},
//     {name: "Chat4", image: "./TestImages/chat.jpg"},
//     {name: "Chat5", image: "./TestImages/chat.jpg"},
//     {name: "Chat6", image: "./TestImages/chat.jpg"},
//     {name: "Chat7", image: "./TestImages/chat.jpg"},
//     {name: "Chat8", image: "./TestImages/chat.jpg"},
// ]

// let photosArray = [
//     {name: "Camera0", image: "./TestImages/camera.jpg"},
//     {name: "Camera1", image: "./TestImages/camera.jpg"},
//     {name: "Camera2", image: "./TestImages/camera.jpg"},
//     {name: "Camera3", image: "./TestImages/camera.jpg"},
//     {name: "Camera4", image: "./TestImages/camera.jpg"},
//     {name: "Camera5", image: "./TestImages/camera.jpg"},
//     {name: "Camera6", image: "./TestImages/camera.jpg"},
//     {name: "Camera7", image: "./TestImages/camera.jpg"},
//     {name: "Camera8", image: "./TestImages/camera.jpg"},
// ]

// let settingsArray = [
//     {name: "Sprocket0", image: "./TestImages/settings.jpg"},
//     {name: "Sprocket1", image: "./TestImages/settings.jpg"},
//     {name: "Sprocket2", image: "./TestImages/settings.jpg"},
//     {name: "Sprocket3", image: "./TestImages/settings.jpg"},
//     {name: "Sprocket4", image: "./TestImages/settings.jpg"},
//     {name: "Sprocket5", image: "./TestImages/settings.jpg"},
//     {name: "Sprocket6", image: "./TestImages/settings.jpg"},
//     {name: "Sprocket7", image: "./TestImages/settings.jpg"},
//     {name: "Sprocket8", image: "./TestImages/settings.jpg"}
// ]
