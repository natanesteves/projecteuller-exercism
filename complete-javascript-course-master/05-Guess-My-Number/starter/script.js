'use strict';
const number =  Math.trunc(Math.random()* 20)+1;

document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Voce nao botou um numero';
  } else if(guess === number){
    document.querySelector('.message').textContent = "Voce acertou"+guess;
  }else{
    document.querySelector('.message').textContent = 'tente novamente';
  }
});
