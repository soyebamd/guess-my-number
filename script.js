'use strict';

let initNumber = Math.trunc(Math.random() * 20) + 1;

const playAgain = document.querySelector('.again');

let highscoreInit = 0;

let score = 10;

let isWin = false;

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

const messageContent = function (statusMessage) {
  message.textContent = statusMessage;
};

messageContent('Start Number guessing...');

const inputNumberField = document.querySelector('.guess');

const checkButton = document.querySelector('.check');

checkButton.addEventListener('click', function () {
  const guessNumber = Number(inputNumberField.value);

  function scoreComponent() {
    score--;
    if (score <= 0) {
      score = 0;
      GuessNumber.textContent = initNumber;
      messageContent('😔 You Loss');
      document.body.style.backgroundColor = 'red';
    }
  }

  function scoreStatus(status) {
    messageContent(status);
    scoreComponent();
    scroreDisplay.textContent = score;
  }

  // start logic here

  if (!guessNumber) {
    messageContent('🫗 Guess number is empty ');
  } else if (guessNumber > initNumber) {
    scoreStatus('📈 Too high');
  } else if (guessNumber < initNumber) {
    scoreStatus('📉 Too low');
  } else {
    messageContent('😍 Matched. You win!');
    isWin = true;
    highscoreInit = score;
    highScoreDisplay.textContent = highscoreInit;
    document.body.style.backgroundColor = 'green';
    GuessNumber.textContent = initNumber;
  }

  if (isWin) {
    checkButton.disabled = true;
    inputNumberField.disabled = true;
  }
});

playAgain.addEventListener('click', function () {
  console.log('play again');
  score = 10;
  scroreDisplay.textContent = score;
  inputNumberField.value = '';
  GuessNumber.textContent = '?';
  messageContent('Start Number guessing...');
  document.body.style.backgroundColor = '';
});
