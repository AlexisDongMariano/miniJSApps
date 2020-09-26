/*
GAME Function:
- Player must guess a num between min and max
- Player gets a certain guess tries
- Notify player of remaining guesses
- Notify player of the correct answer if loose
- Player can play again
*/

// Game Values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    btnGuess = document.querySelector('#btn-guess'),
    inputGuess = document.querySelector('#input-guess'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
btnGuess.addEventListener('click', function () {
    let guess = parseInt(inputGuess.value);
    console.log(guess);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    if (guess === winningNum) {
        // GAME OVER - WON
        // inputGuess.disabled = true;
        // inputGuess.style.borderColor = 'green';
        // setMessage(`You guessed the winning number (${winningNum})!`, 'green');
        gameOver(true, `You guessed the winning number (${winningNum})!`)
    } else {
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // GAME OVER - LOST
            // inputGuess.disabled = true;
            // inputGuess.style.borderColor = 'red';
            // setMessage(`Game Over, the winning number was: ${winningNum}!`, 'red');
            gameOver(false, `Game Over, the winning number was: ${winningNum}!`)
        }
        else {
            // GAME OVER - answered wrong
            setMessage(`${guess} is wrong, try again, ${guessesLeft} retries left`, 'red');
            inputGuess.value = '';
        }
    }
})

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    inputGuess.disabled = true;
    inputGuess.style.borderColor = color;
    setMessage(msg, color);
}