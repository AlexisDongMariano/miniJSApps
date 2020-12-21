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


// =============================================
//      Fetch API - PROMISE IMPLEMENTATION
// =============================================

getPuzzle('2').then(puzzle => { // 1) initially, this is data object now it's just a string
  console.log(puzzle);  // 2) initially, this is data.puzzle to get the string
}).catch(err => console.log(`Error: ${err}`));

getCountry('PH').then(country => {
    console.log(country);
}).catch(err => console.log(`Error: ${err}`));

// =============================================
//  XMLHttpResponse - PROMISE IMPLEMENTATION
// =============================================

// getPuzzle('1').then((puzzle) => console.log(puzzle),
//     (err) => console.log(`Error: ${err}`)
// );

// getCountry('PH').then((country) => console.log(country), 
//     (err) => console.log(`error: ${err}`)
// );


// =============================================
//  XMLHttpResponse - CALLBACK IMPLEMENTATION
// =============================================

// getPuzzle("1", (error, puzzle) => {
//     if (error) {
//         console.log(`Error: ${error}`);
//     }
//     else
//         console.log(puzzle);
// });


// getCountry('PH', (error, country) => {
//     let message = '';
//     error ? message = `Error: ${error}` : message = country;
//     console.log(message);
// });


// ==============================
//      CLOSURE EXAMPLE
// ==============================

const myFunction = () => {
    const message = 'my message';

    printMessage = () => {
        console.log(message);
    };

    return printMessage;
};

const myPrintMessage = myFunction();
myPrintMessage;



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


// ==============================
//  FETCH API IMPLEMENTATION
// ==============================
// **no need to worry for readystate as it will resolve or reject when it's ready for us

// fetch('http://puzzle.mead.io/puzzle', {}).then(response => {    // second parameter is optional
//     if (response.status === 200) {
//         return response.json(); // this actually returns a promise thus, creating a promise chain
//     } else {
//         throw new Error('Unable to fetch puzzle');
//     }
// }).then(data => {   // promise chain
//     console.log(data.puzzle);
// }).catch(err => console.log(`fetch error: ${err}`));


