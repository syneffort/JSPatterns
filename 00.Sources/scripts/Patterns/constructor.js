var Vehicle = (function() {
    function Vehicle(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    Vehicle.prototype.drive = function() {
        console.log(this.name + ' run at speed ' + this.speed);
    }
    return Vehicle;
})();

var smSix = new Vehicle("SM6", 80);
console.log(smSix.drive());