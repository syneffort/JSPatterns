var Century = (function() {
    function Century(leader) {
        this.leader = leader;
    }
    Century.prototype.getLeader = function() {
        return this.leader;
    };
    Century.prototype.getNumber = function() {
        return 80;
    };
    return Century;
})();

var Cohort = (function() {
    function Cohort(leader) {
        this.leader = leader;
        this.centuries = [];
    }
    Cohort.prototype.getLeader = function() {
        return this.leader;
    };
    Cohort.prototype.getNumber = function() {
        var sum = 0;
        this.centuries.forEach(function(Century) {
            sum += Century.getNumber();
        });
        return sum;
    }
    Cohort.prototype.addCentury = function(century) {
        this.centuries.push(century);
        return this;
    };
    return Cohort;
})();

var Legion = (function() {
    function Legion(leader) {
        this.leader = leader;
        this.cohorts = [];
    }
    Legion.prototype.getLeader = function() {
        return this.leader;
    }
    Legion.prototype.getNumber = function() {
        var sum = 0;
        this.cohorts.forEach(function(cohort) {
            sum += cohort.getNumber();
        });
        return sum;
    }
    Legion.prototype.addCohort = function(cohort) {
        this.cohorts.push(cohort);
        return this;
    };
    return Legion;
})();

var century1 = new Century('Maximus');
var century2 = new Century('Tiberius');
var century3 = new Century('Lukius');
var century4 = new Century('Marcus');
var century5 = new Century('Pompeius');
var century6 = new Century('Tirus');

var cohort1 = new Cohort('Vitellius');
var cohort2 = new Cohort('Otho');

var legion = new Legion('Galba');

cohort1.addCentury(century1).addCentury(century2).addCentury(century3);
cohort2.addCentury(century4).addCentury(century5).addCentury(century6);
legion.addCohort(cohort1).addCohort(cohort2);

console.log(legion);
console.log(legion.getLeader());
console.log(legion.getNumber());

console.log(cohort1);
console.log(cohort1.getLeader());
console.log(cohort1.getNumber());
