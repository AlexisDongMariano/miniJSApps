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

const game1 = new Hangman('Cat Person', 2);
const game2 = new Hangman('New Jersey', 4);

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`);
    }
    else
        console.log(puzzle);
});





// ==============================
//      HTTP REQUEST
// ==============================



// const countryCode = 'PH';
// const request_country = new XMLHttpRequest();

// request_country.addEventListener('readystatechange', e => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const countries_JSON = JSON.parse(e.target.responseText);

//         const my_country = countries_JSON.find(country => country.alpha2Code === countryCode);
//         console.log('my country(PH):', my_country.name);

//     } else if (e.target.readyState === 4) {
//         console.log('error has occurred');
//     }

// });
// request_country.open('GET', 'http://restcountries.eu/rest/v2/all');
// request_country.send();