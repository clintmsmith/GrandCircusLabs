let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let dd = document.getElementById("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let day_dot = document.querySelector(".day_dot");
let hr_dot = document.querySelector(".hr");
let min_dot = document.querySelector(".min_dot");
let sec_dot = document.querySelector(".sec_dot");

let endDate = '03/10/2023 10:53:00';
// date format mm/dd/yyyy

let x = setInterval(function(){
    let now = new Date(endDate).getTime();
    let countdown = new Date().getTime();
    let distance = now - countdown;

    // time calculation for days, hours, minutes, and seconds
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let m = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let s = Math.floor(distance % (1000 * 60) / (1000));

    // output the result in element with id
    days.innerHTML = d + "<br><span>Days<span>";
    hours.innerHTML = h + "<br><span>Hours<span>";
    minutes.innerHTML = m + "<br><span>Minutes<span>";
    seconds.innerHTML = s + "<br><span>Seconds<span>";

    // Animate Stroke
    // 365 days / year
    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    // 24 hours / day
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    // 60 minutes / hour
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    // 60 seconds / minute
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    // Animate Circle Dots
    // 360 deg / 365 days = 0.986
    day_dot.style.transform = `rotateZ(${d * 0.986})`;
    // 360 deg / 24 hours = 15
    hr_dot.style.transform = `rotateZ(${h * 15})`;
    // 360 deg / 60 minutes = 6
    min_dot.style.transform = `rotateZ(${m * 6})`;
    // 360 deg / 60 seconds = 6
    sec_dot.style.transform = `rotateZ(${s * 6})`;

    // If the countdown is over, write some text
    if(distance < 0){
        clearInterval(x);
        document.getElementById('time').style.display = 'none';
        // This part isn't quite working for me
        document.querySelector('.hidden').classList.remove = '.hidden';
    }
})