const BodyElement = document.querySelector("body");
let countdownDiv = document.createElement("div");
let dateDiv = document.createElement("div");
let monthsDiv = document.createElement("div");
let daysDiv = document.createElement("div");
let hoursDiv = document.createElement("div");
let minutesDiv = document.createElement("div");
let secondsDiv = document.createElement("div");
let datePickerElement = document.createElement("input");

let monthsTitle = document.createElement("h3");
let monthsElement = document.createElement("p");
let daysTitle = document.createElement("h3");
let daysElement = document.createElement("p");
let hoursTitle = document.createElement("h3");
let hoursElement = document.createElement("p");
let minutesTitle = document.createElement("h3");
let minutesElement = document.createElement("p");
let secondsTitle = document.createElement("h3");
let secondsElement = document.createElement("p");

let goalDate = new Date(2024, 11, 21, 0, 0, 0); // First day of holidays

//Set titles
monthsTitle.innerText = "Months";
daysTitle.innerText = "Days";
hoursTitle.innerText = "Hours";
minutesTitle.innerText = "Minutes";
secondsTitle.innerText = "Seconds";

//Add titles to the sections
monthsDiv.append(monthsTitle, monthsElement);
daysDiv.append(daysTitle, daysElement);
hoursDiv.append(hoursTitle, hoursElement);
minutesDiv.append(minutesTitle, minutesElement);
secondsDiv.append(secondsTitle, secondsElement);

//Add countdown sections
countdownDiv.append(monthsDiv, daysDiv, hoursDiv, minutesDiv, secondsDiv);
dateDiv.append(countdownDiv);
BodyElement.append(dateDiv);

//Add date input
datePickerElement.type = "date";
dateDiv.append(datePickerElement);

datePickerElement.addEventListener("change", () => {
    let selectedDate = new Date(datePickerElement.value);
    goalDate = selectedDate;
    console.log(datePickerElement.value);
});

//Function to update the countdown
function countdown() {
    const currentDate = new Date();
    let timeDifference = goalDate - currentDate;  

    //If the date has passed, stops the countdown
    if (timeDifference < 0) {
        monthsElement.innerText = 0;
        daysElement.innerText = 0;
        hoursElement.innerText = 0;
        minutesElement.innerText = 0;
        secondsElement.innerText = 0;
        return; 
    }

    let totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let months = Math.floor(totalDays / 30);
    let days = totalDays%30;
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    //Update content acording to countdown
    monthsElement.innerText = months;
    daysElement.innerText = days;
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;

    //Clear previous color classes
    monthsElement.classList.remove("redColor", "orangeColor", "greenColor");
    daysElement.classList.remove("redColor", "orangeColor", "greenColor");
    hoursElement.classList.remove("redColor", "orangeColor", "greenColor");
    minutesElement.classList.remove("redColor", "orangeColor", "greenColor");
    secondsElement.classList.remove("redColor", "orangeColor", "greenColor");

    //Change color based on remaining days
    if (totalDays <= 7) {
        monthsElement.classList.add("redColor");
        daysElement.classList.add("redColor");
        hoursElement.classList.add("redColor");
        minutesElement.classList.add("redColor");
        secondsElement.classList.add("redColor");
    } else if (totalDays > 7 && totalDays <= 14) {
        monthsElement.classList.add("orangeColor");
        daysElement.classList.add("orangeColor");
        hoursElement.classList.add("orangeColor");
        minutesElement.classList.add("orangeColor");
        secondsElement.classList.add("orangeColor");
    } else if (totalDays > 14) {
        monthsElement.classList.add("greenColor");
        daysElement.classList.add("greenColor");
        hoursElement.classList.add("greenColor");
        minutesElement.classList.add("greenColor");
        secondsElement.classList.add("greenColor");
    }
}

//Update the countdown every second
setInterval(countdown, 1000);

//Initial styles
countdownDiv.classList.add("countDownDiv");
dateDiv.classList.add("dateDiv");