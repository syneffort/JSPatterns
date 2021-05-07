var Legionary = (function() {
    function Legionary(name) {
        this.name = name;
        
        // 모든 객체마다 속성 생성되어 메모리 낭비됨
        // this.hp = 50;
        // this.att = 5;
        
        Legionary.prototype.hp = 50;
        Legionary.prototype.att = 5;

        // 모든 객체마다 메소드가 생성되어 메모리 낭비됨
        // this.attack = function(target) {
        //     console.log(this.name + ' attacks ' + target.name);
        // };
        
        Legionary.prototype.attack = function(target) {
            console.log(this.name + ' attacks ' + target.name);
        };
    }
    return Legionary;
})();

soldier1 = new Legionary('Marcus');
soldier2 = new Legionary('Tiberius');
soldier3 = new Legionary('Maximus');

soldier2.hp = 20;

console.log(soldier1.hp);
console.log(soldier2.hp);
console.log(soldier3.hp);