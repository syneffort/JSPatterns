var Galba = (function() {
    function Galba() {
        this.legions = [];
        this.legions.push(new Legion(1));
        this.legions.push(new Legion(2));
        this.legions.push(new Legion(3));
    }
    Galba.prototype.march = function() {
        this.legions.forEach(function(legion) {
            legion.supply();
            legion.makeFormation();
            legion.goForward();
        });
    };
    Galba.prototype.attack = function() {
        this.legions.forEach(function(legion) {
            legion.makeFormation();
            legion.pullOutSword();
            legion.rushToEnemy();
        });
    };
    Galba.prototype.halt = function() {
        this.legions.forEach(function(legion) {
            legion.halt();
        });
    };
    Galba.prototype.retreat = function() {
        this.legions.forEach(function(legion) {
            legion.retreat();
        });
    };
    return Galba;
})();

var Legion = (function() {
    function Legion(number) {
        this.number = number;
    };
    Legion.prototype.supply = function() {
        console.log('Legion' + this.number + " " + 'supply!');
    };
    Legion.prototype.makeFormation = function() {
        console.log('Legion' + this.number + " " + 'Make formation!');
    };
    Legion.prototype.goForward = function() {
        console.log('Legion' + this.number + " " + 'Go foward!');
    }
    Legion.prototype.pullOutSword = function() {
        console.log('Legion' + this.number + " " + 'pullout sword!');
    }
    Legion.prototype.rushToEnemy = function() {
        console.log('Legion' + this.number + " " + 'Rush to enemy!');
    }
    Legion.prototype.halt = function() {
        console.log('Legion' + this.number + " " + 'Halt!');
    }
    Legion.prototype.retreat = function() {
        console.log('Legion' + this.number + " " + 'Retreat!');
    }
    return Legion;
})();

var galba = new Galba();
galba.march();
galba.attack();