var makeLegion = function(leader) {
    var adjutants = null;
    var army = 0;
    return {
        setAdjutant: function(list) {
            adjutants = list;
            return this;
        },
        setArmy: function(number) {
            army = number;
            return this;
        },
        build: function() {
            return new Legion(leader, adjutants, army);
        }
    };
};

var Legion = (function() {
    function Legion(leader, adjutants, number) {
        this.leader = leader;
        this.adjutants = adjutants;
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