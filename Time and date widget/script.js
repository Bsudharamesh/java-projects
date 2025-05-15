// Use proper selectors - assuming these are IDs
let dateContainer = document.querySelector(".dateContainer");
let hourscontainer = document.querySelector(".hours");
let minutescontainer = document.querySelector(".minutes");
let secondscontainer = document.querySelector(".seconds");

const weekdays = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
];

const monthNames = [
    "January", 
    "February",  // Fixed spelling
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October",   // Fixed spelling
    "November", 
    "December"
];

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function updateClock() {
    const today = new Date();

    let date = today.getDate();
    let day = weekdays[today.getDay()];
    let month = monthNames[today.getMonth()];

    let hours = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());

    dateContainer.innerHTML = `<p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;
    hourscontainer.textContent = hours + ":";
    minutescontainer.textContent = minutes + ":";
    secondscontainer.textContent = seconds;
}

// Update every second
setInterval(updateClock, 1000);

// Initial call to show immediately
updateClock();
