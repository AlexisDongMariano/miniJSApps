// ==============================
//      OBJECT DECLARATIONS
// ==============================

class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'playing';
    }

    getPuzzle() {
        let puzzle = '';

        this.word.forEach(letter => {
            if (this.guessedLetters.includes(letter) || letter === ' ')
                puzzle += letter;
            else
                puzzle += '*';
        });
        return puzzle;
    }

    makeGuess(guessedLetter) {
        guessedLetter = guessedLetter.toLowerCase();
        const isInGuessed = this.guessedLetters.includes(guessedLetter);

        if (this.status === 'playing') {
            if (!isInGuessed)
                this.guessedLetters.push(guessedLetter);
            if (!this.word.includes(guessedLetter) && !isInGuessed)
                this.remainingGuesses -= 1;
        }
        else
            return

        this.getStatus();
    }

    getStatus() {
        if (this.remainingGuesses === 0)
            this.status = 'failed';
        else if (!this.getPuzzle().includes('*'))
            this.status = 'finished';
        else
            this.status = 'playing';
    }

    getStatusMessage() {
        let message = '';
        if (this.status === 'playing')
            message += `Guesses left: ${this.remainingGuesses}`;
        else if (this.status === 'failed')
            message += `Nice try! the word was: ${this.word.join('')}`;
        else
            message += 'Great work! You guessed the word.';

        return message;
    }
}

// ==============================
//      OTHER INFORMATION
// ==============================

// commented below is the implementation of class in es5

// const Hangman = function (word, remainingGuesses) {
//     this.word = word.toLowerCase().split('');
//     this.remainingGuesses = remainingGuesses;
//     this.guessedLetters = [];
//     this.status = 'playing';
// };

// Hangman.prototype.getPuzzle = function () {
//     let puzzle = '';

//     this.word.forEach(letter => {
//         if (this.guessedLetters.includes(letter) || letter === ' ')
//             puzzle += letter;
//         else
//             puzzle += '*';
//     });
//     return puzzle;
// };

// Hangman.prototype.makeGuess = function (guessedLetter) {
//     guessedLetter = guessedLetter.toLowerCase();
//     isInGuessed = this.guessedLetters.includes(guessedLetter);

//     if (this.status === 'playing') {
//         if (!isInGuessed)
//             this.guessedLetters.push(guessedLetter);
//         if (!this.word.includes(guessedLetter) && !isInGuessed)
//             this.remainingGuesses -= 1;
//     }
//     else
//         return

//     this.getStatus();
// };

// Hangman.prototype.getStatus = function () {
//     if (this.remainingGuesses === 0)
//         this.status = 'failed'
//     else if (!this.getPuzzle().includes('*'))
//         this.status = 'finished'
//     else
//         this.status = 'playing'
// };

// Hangman.prototype.getStatusMessage = function () {
//     message = '';
//     if (this.status === 'playing')
//         message += `Guesses left: ${this.remainingGuesses}`;
//     else if (this.status === 'failed')
//         message += `Nice try! the word was: ${this.word.join('')}`;
//     else
//         message += 'Great work! You guessed the word.';

//     return message;
// };

