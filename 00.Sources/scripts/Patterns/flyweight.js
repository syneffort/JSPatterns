var Legionary = (function() {
    function Legionary(name) {
        this.name = name;
        
        // ��� ��ü���� �Ӽ� �����Ǿ� �޸� �����
        // this.hp = 50;
        // this.att = 5;
        
        Legionary.prototype.hp = 50;
        Legionary.prototype.att = 5;

        // ��� ��ü���� �޼ҵ尡 �����Ǿ� �޸� �����
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