'use strict';

const getNewnumber = () => Math.trunc(Math.random() * 20) + 1;
let secretNumber = getNewnumber();
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const body = document.querySelector('body');
let guess = document.querySelector('.guess');

document.querySelector('.check').addEventListener('click', () => {
  if (!guess.value) {
    message.textContent = '⛔️ No Number!';
    return;
  }
  if (guess.value > 20 || guess < 1) alert('the number is invalid');
  if (guess.value > secretNumber) {
    validateScore('📈 too high');
  } else if (guess.value < secretNumber) {
    validateScore('📉 too low');
  } else {
    message.textContent = '🎊 Correct Number!';
    if (Number(highscore.textContent) < Number(score.textContent)) {
      highscore.textContent = score.textContent;
    }
    getNewnumber();
    document.querySelector('.guess').value = '';
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = getNewnumber();
  body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  guess.value = '';
  score.textContent = '20';
  number.textContent = '?';
});

function validateScore(validateMessage) {
  if (score.textContent > 1) {
    message.textContent = validateMessage;
    score.textContent--;
  } else {
    message.textContent = '💥 You lost';
    score.textContent = 0;
  }
}
