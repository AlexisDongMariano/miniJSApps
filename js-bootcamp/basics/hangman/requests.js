const getPuzzle = (wordCount, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', e => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            callback(undefined, data.puzzle);
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined);
        }
    });

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send(); // initiate the request process
};


const getCountry = (countryCode, callback) => {
    const request_country = new XMLHttpRequest();

    request_country.addEventListener('readystatechange', e => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const countries_JSON = JSON.parse(e.target.responseText);
            const my_country = countries_JSON.find(country => country.alpha2Code === countryCode);
            callback(undefined, my_country.name);
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined);
        }

    });

    request_country.open('GET', 'http://restcountries.eu/rest/v2/all');
    request_country.send();
};

