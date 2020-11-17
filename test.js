class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }

    getBio() {
        let bio = `${this.firstName} ${this.lastName} is ${this.age}.`;
        this.likes.forEach(like => bio += ` ${this.firstName} likes ${like}.`);

        return bio;
    }

    // setName(fullName) {
    //     fullName = fullName.split(' ');
    //     this.firstName = fullName[0];
    //     this.lastName = fullName[1];
    // }
    set fullName(fullName) {
        fullName = fullName.split(' ');
        this.firstName = fullName[0];
        this.lastName = fullName[1];
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes);
        this.position = position;
    }

    getBio() {
        return `${this.fullName} is ${this.position}`;
    }
}

const me = new Person('Alexis', 'Mariano', 27, ['coding', 'playing', 'learning', 'improving']);
console.log('Bio:', me.getBio());
// me.setName('Dong Mariano');
me.fullName = 'Dong Mariano';
console.log('Bio:', me.getBio());

const nipie = new Employee('Marian', 'Pizana', 26, 'associate designer', ['designing', 'playing', 'watching', 'improving']);
console.log('Bio:', nipie.getBio());
nipie.fullName = 'Marian Mariano'
console.log('Bio:', nipie.getBio());





// const data = {
//     get location() {
//         return this._location;
//     },

//     set location(value) {
//         this._location = value.trim();
//     }
// };

// data.location = ' Philadelphia ';
// console.log(data.location);