"use strict";
// The diplays
const daysDisplayEl = document.querySelector(".count-down-number--days");
const hoursDisplayEl = document.querySelector(".count-down-number--hours");
const minutesDispalyEl = document.querySelector(".count-down-number--minutes");
const secondsDisplayEl = document.querySelector(".count-down-number--seconds");
//Input element
const dateInput = document.querySelector(".date-input");
//The start countdown buttonm
const startCountdownBtn = document.querySelector(".btn");

//Determine the min date for the input date
const determineMinDate = function () {
  const nowDate = new Date();
  const year = nowDate.getFullYear();
  const month = String(nowDate.getMonth() + 1).padStart(2, "0");
  const day = String(nowDate.getDate() + 1).padStart(2, "0");

  console.log(month, day, year);
  return `${year}-${month}-${day}`;
};

//Sets the min date based of the determine date
const setMinDate = function (d) {
  dateInput.min = `${d}`;
};

// How to get the goal date from input
const getGoalDate = function () {
  const input = String(dateInput.value);
  const [year, month, day] = input.split("-");
  return `${year}-${month}-${day}`;
};

const convertMili = function (t) {
  let timeLeftClone = t;
  // Similar to the timer
};

//Once the user logs in the min date is set
setMinDate(determineMinDate());

startCountdownBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const goalDate = new Date(getGoalDate());
  const countDown = setInterval(function () {
    //Goal date - Date.now() is the miliseconds that have passed since you clicked
    const timeLeft = goalDate - Date.now();
    //format the milliseconds to days hours minutes seconds
    //Get the formatted day, hours, minutes seconds to change the elements
  }, 1000);
});
