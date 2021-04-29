function Vehicle(name, speed) {
    this.name = name;
    this.speed = speed;
}
Vehicle.prototype.drive = function() {
    console.log(this.name + " run at " + this.speed);
}

var tico = new Vehicle("tico", 50);
tico.drive();

function Sedan(name, speed, maxspeed) {
    Vehicle.apply(this, arguments);
    this.maxspeed = maxspeed;
}
Sedan.prototype = Object.create(Vehicle.prototype);
Sedan.prototype.constructor = Sedan;
Sedan.prototype.boost = function() {
    console.log(this.name + " boosts its speed at " + this.maxspeed);
}

var sonata = new Sedan("sonata", 100, 200);
sonata.drive();
sonata.boost();

function Truck(name, speed, capacity) {
    Vehicle.apply(this, arguments);
    this.capacity = capacity;
}
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;
Truck.prototype.laod = function(weight) {
    if (weight > this.capacity){
        return console.error("Too heavy!");
    }

    return console.log("Loaded!");
}

var sixzero = new Truck("sixzero", 40, 100);
sixzero.drive();
sixzero.laod(120);