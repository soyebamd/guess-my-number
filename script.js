'use strict';

let initNumber = Math.trunc(Math.random() * 20) + 1;

const playAgain = document.querySelector('.again');

let highscoreInit = 0;
let score = 20;

//score display
let scroreDisplay = document.querySelector('.score');
scroreDisplay.textContent = score;

//highscrore display
let highScoreDisplay = document.querySelector('.highscore');
highScoreDisplay.textContent = highscoreInit;

//guess number
let GuessNumber = document.querySelector('.number');
GuessNumber.textContent = initNumber;

//message
let message = document.querySelector('.message');
message.textContent = 'Start Number guessing...';

const inputNumberField = document.querySelector('.guess');

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(inputNumberField.value);

  // start logic here

  if (!guessNumber) {
    message.textContent = '🫗  Guess number is empty ';
  } else if (guessNumber > initNumber) {
    message.textContent = '📈 Too high';
    if (score <= 0) {
      score = 0;
      message.textContent = '😔 You Loss';
    } else {
      score--;
    }

    scroreDisplay.textContent = score;
  } else if (guessNumber < initNumber) {
    message.textContent = '📉 Too low';
    if (score <= 0) {
      score = 0;
      message.textContent = '😔 You Loss';
    } else {
      score--;
    }

    scroreDisplay.textContent = score;
  } else {
    message.textContent = '😍 Matched';
    highscoreInit = score;
    highScoreDisplay.textContent = highscoreInit;
  }
});

playAgain.addEventListener('click', function () {
  console.log('play again');
  score = 20;
  scroreDisplay.textContent = score;
  inputNumberField.value = '';
  initNumber = Math.trunc(Math.random() * 20) + 1;
  GuessNumber.textContent = initNumber;
  message.textContent = 'Start Number guessing...';
});
