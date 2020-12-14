const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This is data');
    }, 2000);
};

getDataCallback((error, data) => {
    if (error){
        console.log('error');
    }
    else {
        console.log(data);
    }
})

// calling function twice
const getDataCallback2 = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num*2);
        } else {
            callback('Number must be provided');
        }
    }, 2000);
    
};

getDataCallback2(2, (err, data) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        getDataCallback2(data, (err, data) => {
            if (err) {
                console.log(`Error: ${err}`);
            } else {
                console.log(data);
            }
        });
    }
});


// Promise
const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is my success data: ${data}`);
        reject('this is the promise error');
    }, 2000);
});

const myPromise = getDataPromise(123);

myPromise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
});

// calling promise twice
const getDataPromise2 = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided');
    }, 2000);
});

// not so great implementation of calling promise twice
getDataPromise2(2).then((data) => {
    getDataPromise2(data).then((data) => {
        console.log(`Promise data: ${data}`);
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(`Error: ${err}`);
});

// better implementation, PROMISE CHAINING
getDataPromise2(10).then((data) => {
    return getDataPromise2(data);
}).then((data) => {
    return getDataPromise2(data);
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(`Promise chaining error: ${err}`);
})



