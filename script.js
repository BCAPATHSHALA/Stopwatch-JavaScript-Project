const HRS = document.querySelector("#HRS");
const MIN = document.querySelector("#MIN");
const SEC = document.querySelector("#SEC");
const MSEC = document.querySelector("#MSEC");

const Pause = document.querySelector("#Pause");
const Start = document.querySelector("#Start");
const Reset = document.querySelector("#Reset");

//! Initialization of milliseconds, seconds, minutes, and hours with zero
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

//! Set interval id as null
let currentIntervalId = null;

//! Appends Zero Digit With All Variable HRS, MINS, SECS, MSEC
function appendZeroWithAll(hours, minutes, seconds, milliseconds) {
  let hrs = hours < 10 ? "0" + hours : hours;
  let mins = minutes < 10 ? "0" + minutes : minutes;
  let secs = seconds < 10 ? "0" + seconds : seconds;
  let millsecs =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  //   console.log(` ${hrs} : ${mins} : ${secs} : ${millsecs}`);
  HRS.textContent = hrs;
  MIN.textContent = mins;
  SEC.textContent = secs;
  MSEC.textContent = millsecs;
}

//! Conversion Logic of dispalyTimer: MSECS > SECS > MINS > HRS
const displayTime = () => {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  // console.log(` ${hours} : ${minutes} : ${seconds} : ${milliseconds}`);
  appendZeroWithAll(hours, minutes, seconds, milliseconds);
};

//! Start Timer Function
const startTimer = () => {
  if (currentIntervalId !== null) {
    // Cancel a scheduled function call for old timer when it does exist
    clearInterval(currentIntervalId);
  }
  // Yanha tak tabhi pahunch skta hu jab old timer exist nhi karta hoga
  currentIntervalId = setInterval(displayTime, 10);
};

Start.addEventListener("click", startTimer);

//! Pause Timer Function
const pauseTimer = () => {
  // Cancel a scheduled function call for current running timer when it does exist
  clearInterval(currentIntervalId);
  // Iss Function ne only current interval ki id ko clear kiya hai but HRS, MIN, SEC, MSEC ko clear nhi kiya hai
};

Pause.addEventListener("click", pauseTimer);

//! Reset Timer Function
const resetTimer = () => {
  // Cancel a scheduled function call for current running timer when it does exist
  clearInterval(currentIntervalId);
  // Initialization of each variable with zero value to print the timer from starting
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  // Iss Function ne current interval ki id ke sath sath HRS, MIN, SEC, MSEC ko bhi clear kiya hai
  HRS.textContent = hours;
  MIN.textContent = minutes;
  SEC.textContent = seconds;
  MSEC.textContent = milliseconds;
};

Reset.addEventListener("click", resetTimer);