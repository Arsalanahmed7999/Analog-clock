console.log('loaded');

setInterval(() => {
    let d = new Date();
let hr = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();

let hr_rotation = hr * 30 + min/2 ; 
let min_rotation = min * 6;
let sec_rotation = sec * 6;

let hours = document.getElementById('hour');
let mins = document.getElementById('min');
let secs = document.getElementById('sec');


hours.style.transform = `rotate(${hr_rotation}deg)`
mins.style.transform = `rotate(${min_rotation}deg)`
secs.style.transform = `rotate(${sec_rotation}deg)`
}, 1000);