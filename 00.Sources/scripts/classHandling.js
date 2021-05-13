// ************************
// ? class by function
// ************************
function Cat(name, age) {
    this.name = name;
    this.age = age;
}

Cat.prototype.makeNoise = function() {
    console.log("Meow");
}

var cake = new Cat('Cheese', 3);
cake.makeNoise();



// ************************
// ? class by class (ES6)
// ************************
class Animal {
    constructor(name, age, hiding='secret') { // ? constructor
        var hiding = hiding; // ? hiding by scope range
        this.name = name; // ? property
        this.age = age; // ? property
        this.getHiding = () => {
            return hiding;
        };
    }

    getName() { // ? method
        console.log(this.name);
    }

    getAge() {
        console.log(this.age);
    }

    static sleep() { // ? static method
        console.log('Zzz');
    }

    makeNoise() { // ? abstract
        throw new Error('not implemented');
    }
}

Animal.sleep();
var dog = new Animal('Bow', 3, 'I\'m cat');
dog.getName();
dog.getAge();
console.log(dog.hiding);
console.log(dog.getHiding());



// ************************
// ? inheritance and polymorphism
// ************************
class Dog extends Animal {
    constructor (name, age, hiding) {
        super(name, age, hiding);
    }

    makeNoise() {
        console.log("Bark");
    }
}

Dog.sleep();
var jake = new Dog('Jake', 10, 'No secret');
jake.getName();
jake.getAge();
console.log(jake.hiding);
console.log(jake.getHiding());
jake.makeNoise();


// ************************
// ? overriding
// ************************
class Bread {
    constructor(name) {
        this.name = name;
    }

    checkInside() {
        console.log('empty');
    }
}

class BananaBread extends Bread {
    constructor(name) {
        super(name);
    }

    checkInside() {
        console.log('banana');
    }
}

var bananaBread = new BananaBread('bread');
bananaBread.checkInside();



// ************************
// ? overloading : not possible in js
// ************************