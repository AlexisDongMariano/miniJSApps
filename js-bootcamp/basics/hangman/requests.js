const getPuzzle = wordCount => {
    // **no need to worry for readystate as it will resolve or reject when it's ready for us
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then(response => {  // 3) returns the promise string
        if (response.status === 200) {
            return response.json(); // 1) returns a promise
        } else {
            throw new Error('Unable to return fetch puzzle');
        }
    }).then(data => {
        return data.puzzle; // 2) returns a promise containing string from promise #1
    });
};


// ==============================
//  XMLHttpRequest - Promise
// ==============================

// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', e => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             resolve(data.puzzle);
//         } else if (e.target.readyState === 4) {
//             reject('An error has taken place');
//         }
//     });

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send(); // initiate the request process
// });


const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const request_country = new XMLHttpRequest();

    request_country.addEventListener('readystatechange', e => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const countries_JSON = JSON.parse(e.target.responseText);
            const my_country = countries_JSON.find(country => country.alpha2Code === countryCode);
            resolve(my_country.name);
        } else if (e.target.readyState === 4) {
            reject('An error has taken place');
        }

    });

    request_country.open('GET', 'http://restcountries.eu/rest/v2/all');
    request_country.send();
});
  




// ==============================
//  XmlHttpRequest - Callback
// ==============================

// const getPuzzle = (wordCount, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', e => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             callback(undefined, data.puzzle);
//         } else if (e.target.readyState === 4) {
//             callback('An error has taken place', undefined);
//         }
//     });

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send(); // initiate the request process
// };


// const getCountry = (countryCode, callback) => {
//     const request_country = new XMLHttpRequest();

//     request_country.addEventListener('readystatechange', e => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const countries_JSON = JSON.parse(e.target.responseText);
//             const my_country = countries_JSON.find(country => country.alpha2Code === countryCode);
//             callback(undefined, my_country.name);
//         } else if (e.target.readyState === 4) {
//             callback('An error has taken place', undefined);
//         }

//     });

//     request_country.open('GET', 'http://restcountries.eu/rest/v2/all');
//     request_country.send();
// };

