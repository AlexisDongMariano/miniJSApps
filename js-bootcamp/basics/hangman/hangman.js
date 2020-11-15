const letter = document.addEventListener('keyup', e => {
    console.log(e.key);
    game1.makeGuess(e.key);
    console.log('game1:', game1.getPuzze());
    game2.makeGuess(e.key);
    console.log('game2:', game2.getPuzze());
});

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
};

Hangman.prototype.getPuzze = function () {
    let puzzle = '';

    this.word.forEach(letter => {
        if (this.guessedLetters.includes(letter) || letter === ' ')
            puzzle += letter;
        else
            puzzle += '*';
    });

    return puzzle;
};

Hangman.prototype.makeGuess = function (guessedLetter) {
    guessedLetter = guessedLetter.toLowerCase();
    if (this.remainingGuesses > 0) {
        if (!this.guessedLetters.includes(guessedLetter))
            this.guessedLetters.push(guessedLetter);
        if (!this.word.includes(guessedLetter))
            this.remainingGuesses -= 1;
    }
};

const game1 = new Hangman('Cat', 2);
const game2 = new Hangman('New Jersey', 4);
