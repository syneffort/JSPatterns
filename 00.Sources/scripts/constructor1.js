function Person(name, gender){
    this.name = name;
    this.gender = gender;
    this.sayHello = function() {
        alert(this.name + ` said "hello"`);
    }
}

var zero = new Person("Zero", "m");
var hero = new Person("Hero", "f");

zero.sayHello();
hero.sayHello();