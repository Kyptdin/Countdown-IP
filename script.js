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
  const [year, month, day] = String(dateInput.value).split("-");
  const formatedDay = String(Number(day.trimStart("0")));
  return `${year}-${month}-${formatedDay}`;
};

const calcTime = function (t) {
  let timeLeftClone = t;
  let days = Math.floor(timeLeftClone / 86400000);
  timeLeftClone -= days * 86400000;
  let hours = Math.floor(timeLeftClone / 3600000);
  timeLeftClone -= hours * 3600000;
  let minutes = Math.floor(timeLeftClone / 60000);
  timeLeftClone -= minutes * 60000;
  let seconds = Math.floor(timeLeftClone / 1000);
  const timeSec = [days, hours, minutes, seconds];
  return timeSec;
};

const displayTime = function (a) {
  const timeSec = a;
  const days = a[0];
  const hours = a[1];
  const minutes = a[2];
  const seconds = a[3];
  daysDisplayEl.textContent = `${days}`;
  hoursDisplayEl.textContent = `${hours}`.padStart(2, "0");
  minutesDispalyEl.textContent = `${minutes}`.padStart(2, "0");
  secondsDisplayEl.textContent = `${seconds}`.padStart(2, "0");
};

const calcDisplayTime = function (t) {
  displayTime(calcTime(t));
};

//Once the user logs in the min date is set
setMinDate(determineMinDate());

startCountdownBtn.addEventListener("click", function (e) {
  e.preventDefault();
  getGoalDate();
  const goalDate = new Date(getGoalDate());
  goalDate.setHours(23);
  goalDate.setMinutes(59);
  goalDate.setSeconds(59);
  goalDate.setMilliseconds(999);
  const adjustedDate = goalDate - 86_400_000;

  let countDown = setInterval(function () {
    let nowDate = new Date();
    let timeLeft = adjustedDate - nowDate;
    calcDisplayTime(timeLeft);
  }, 1000);
});
