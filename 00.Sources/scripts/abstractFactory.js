var abstractCharacterFactory = (function() {
    var jobs = {};
    return {
        addJob: function(job, Character) {
            if (Character.prototype.attack) {
                jobs[job] = Character;
            }
        },
        create: function(job, opetions) {
            var Character = jobs[job];
            return (Character ? new Character(opetions) : null);
        }
    };
})();

var Emperor = (function() {
    function Emperor(opetions) {
        this.name = opetions.name;
    }
    Emperor.prototype.attack = function(target) {
        console.log(`${this.name} attacks ${target,name}.`);
    };
    Emperor.prototype.proclaim = function() {
        console.log(`${this.name} proclaims himself the emperor.`);
    };
    return Emperor;
})();

var Governor = (function() {
    function Governor(opetions) {
        this.name = opetions.name;
    }
    Governor.prototype.attack = function(target) {
        console.log(`${this.name} attacks ${target.name}.`);
    };
    Governor.prototype.betray = function() {
        console.log(`${this.name} betrays the emperor.`);
    };
    return Governor;
})();

abstractCharacterFactory.addJob('Emperor', Emperor);
abstractCharacterFactory.addJob('Governor', Governor);

var nero = abstractCharacterFactory.create('Emperor', { name: 'Nero'});
var vindex = abstractCharacterFactory.create('Governor', { name: 'Vindex'});
var galba = abstractCharacterFactory.create('Governor', { name: 'Galba'});
var otho = abstractCharacterFactory.create('Governor', { name: 'Otho'});
var vitellius = abstractCharacterFactory.create('Governor', { name: 'Vitellius'});
var rufus = abstractCharacterFactory.create('Governor', { name: 'Rufus'});

nero.proclaim();

vindex.attack(nero);
vindex.betray();

galba.attack(nero);
galba.betray();

otho.attack(nero);
otho.betray();

vitellius.attack(nero);
vitellius.betray();