const createCounter = () => {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        get() {
            return count;
        }
    };
};

let counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.get());

const createTipper = (baseTip) => {
    return (billAmount) => {
        return billAmount * baseTip;
    }
};

const tip20 = createTipper(0.2);
const tip30 = createTipper(0.3);
console.log('tip', tip20(100));
console.log('tip', tip30(100));


