'use strict';

const tens = document.querySelector('.tens');
const seconds = document.querySelector('.seconds');
const stopButton = document.querySelector('.stop-button');
const startButton = document.querySelector('.start-button');
const resetButton = document.querySelector('.reset-button');

////////////////////////////////////////////////////////////////////

let tensCount = '00';
let secondsCount = '00';
let interval;

const startTimer = function () {
  Number(tensCount, secondsCount);
  tensCount++;
  if (tensCount <= 9) {
    tens.textContent = '0' + tensCount;
  }
  if (tensCount > 9) {
    tens.textContent = tensCount;
  }
  if (tensCount === 99) {
    secondsCount++;
    tensCount = '00';
  }
  if (secondsCount > 0 && secondsCount <= 9) {
    seconds.textContent = '0' + secondsCount;
  }
  if (secondsCount > 9) {
    seconds.textContent = secondsCount;
  }
};

startButton.addEventListener('click', function (e) {
  e.preventDefault();
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

stopButton.addEventListener('click', function (e) {
  e.preventDefault();
  clearInterval(interval);
});

resetButton.addEventListener('click', function (e) {
  e.preventDefault();
  clearInterval(interval);
  secondsCount = '00';
  tensCount = '00';
  seconds.textContent = '00';
  tens.textContent = '00';
});
