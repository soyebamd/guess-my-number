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
GuessNumber.textContent = '?';

//message
let message = document.querySelector('.message');
message.textContent = 'Start Number guessing...';

const inputNumberField = document.querySelector('.guess');

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(inputNumberField.value);

  function scoreComponent() {
    score--;
    if (score <= 0) {
      score = 0;
      message.textContent = '😔 You Loss';
      document.body.style.backgroundColor = 'red';
    }
  }

  function scoreStatus(status) {
    scoreComponent();
    message.textContent = status;
    scroreDisplay.textContent = score;
  }

  // start logic here

  if (!guessNumber) {
    message.textContent = '🫗  Guess number is empty ';
  } else if (guessNumber > initNumber) {
    scoreStatus('📈 Too high');
  } else if (guessNumber < initNumber) {
    scoreStatus('📉 Too low');
  } else {
    message.textContent = '😍 Matched. You win!';
    highscoreInit = score;
    highScoreDisplay.textContent = highscoreInit;
    document.body.style.backgroundColor = 'green';
  }
});

playAgain.addEventListener('click', function () {
  console.log('play again');
  score = 20;
  scroreDisplay.textContent = score;
  inputNumberField.value = '';
  GuessNumber.textContent = '?';
  message.textContent = 'Start Number guessing...';
  document.body.style.backgroundColor = '';
});
