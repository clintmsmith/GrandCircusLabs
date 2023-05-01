const button = document.getElementById("my-button");
const title = document.getElementById("title");
let time = 58;
let minutes = 0;
let myInterval = -1;

button.addEventListener("click", function(event) {
    // if paused, then start
    if (myInterval == -1) {
        button.innerHTML = "Pause";
        myInterval = setInterval(function() {
        time++;
        if (time < 10) {
            title.innerHTML = `00:0${time}`
        } else if (time > 10 && time < 60) {
            title.innerHTML = `00:${time}`
        } else if (time === 60) {
            minutes+=1
            title.innerHTML = `0${minutes}:00`
        } else if (time > 60 && time < 70) {
            title.innerHTML = `0${minutes}:0${time - 60}`
        } else if (time >= 70) {
            title.innerHTML = `0${minutes}:${time - 60}`
        }
    
        }, 1000);
    } else {
        button.innerHTML = "Start";
        clearInterval(myInterval);
        myInterval = -1;
    }
    return time;
});

