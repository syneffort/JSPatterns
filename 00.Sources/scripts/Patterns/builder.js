var makeLegion = function(leader) {
    var adjutant = null;
    var army = 0;
    return {
        setAdjutant: function(list) {
            adjutant = list;
            return this;
        },
        setArmy: function(number) {
            army = number;
            return this;
        },
        build: function() {
            return new Legion(leader, adjutant, army);
        }
    };
};

var Legion = (function() {
    function Legion(leader, adjutant, number) {
        this.leader = leader;
        this.adjutants = adjutant;
        this.number = number || 0;
    }
    Legion.prototype.attack = function(target) {
        console.log(`${this.leader} attacks ${target.leader}`);
    };
    return Legion;
})();

var galbaLegion = makeLegion('Galba').setAdjutant(['otho','vindex','vitellius']).setArmy(8000).build();
var rufusLegion = makeLegion('Rufus').setArmy(10000).build();

console.log(galbaLegion);
console.log(rufusLegion);

rufusLegion.attack(galbaLegion);