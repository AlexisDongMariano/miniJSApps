// ==============================
//      UI ELEMENTS
// ==============================
// const div_puzzle = document.querySelector(".puzzle");
const p_puzzle = document.querySelector('#puzzle');
const p_guesses = document.querySelector('#guesses');


// ==============================
//      GLOBAL FUNCTIONS
// ==============================

function displayResults() {
    p_puzzle.textContent = `Puzzle Result: ${game1.puzzle}`;
    p_guesses.textContent = `Remaining Guesses: ${game1.remainingGuesses}`;
}


// ==============================
//      EVENT LISTENERS
// ==============================

const letter = document.addEventListener('keyup', e => {
    game1.makeGuess(e.key);
    // displayResults();
    p_puzzle.textContent = `Puzzle Result: ${game1.puzzle}`;
    p_guesses.textContent = game1.statusMessage;
});


// ==============================
//      RUNTIME LOGIC
// ==============================

const game1 = new Hangman('Cat', 2);
const game2 = new Hangman('New Jersey', 4);
