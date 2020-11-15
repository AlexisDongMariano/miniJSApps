const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
}

Person.prototype.getBio = function () {
    bio = `${this.firstName} is ${this.age}`;
    test = '';

    this.likes.forEach(like => {
        test += `${this.firstName} likes ${like}`;
    })

    return test;

};

const person1 = new Person('Alexis', 'Mariano', 27, ['coding', 'playing video games']);
console.log(person1.getBio());