'use strict';

let secrateNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(data) {
    document.querySelector('.message').textContent = data;
}

const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}


const checkNumber = function() {
    const guessedNumber = Number(document.querySelector('.input').value);

    if (!guessedNumber) {
        displayMessage('no number')
    } else if (guessedNumber === secrateNumber) {
        displayMessage('currect number');
        document.querySelector('.hidden').textContent = secrateNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.high-score').textContent = highScore;
        }

    } else if (guessedNumber !== secrateNumber) {
        if (score > 1) {
            displayMessage(guessedNumber < secrateNumber ? 'too low' : 'too high');
            score--
            displayScore(score);
        } else {
            displayMessage('you lost the game');
            displayScore(0);
        }
    }

}

const resetHandler = function() {
    secrateNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage('start guessing...')
    document.querySelector('body').style.backgroundColor = '#222';
    displayScore(score)
    document.querySelector('.input').value = '';
    document.querySelector('.hidden').textContent = '?';
}