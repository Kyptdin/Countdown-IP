"use strict";
// The diplays
const daysDisplayEl = document.querySelector(".count-down-number--days");
const hoursDisplayEl = document.querySelector(".count-down-number--hours");
const minutesDispalyEl = document.querySelector(".count-down-number--minutes");
const secondsDisplayEl = document.querySelector(".count-down-number--seconds");

//Input elements
const monthInputEl = document.querySelector(".countdown-form-input--months");
const dayInputEl = document.querySelector(".countdown-form-input--days");
const yearInputEl = document.querySelector(".countdown-form-input--years");

//The start countdown buttonm
const startCountdownBtn = document.querySelector(".btn");

// Count down function
const countDown = function () {};

startCountdownBtn.addEventListener("click", function () {
  /* 
  1. Set the date that we're counting down to
  2. Create the countdown function
  */

  const countDownDate = new Date().getTime(); // inside the date contructor put the values of form
});
