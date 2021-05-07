var singleton = (function() {
    var instance;
    function initInstance() {
        return {
            message: 'hello',
            printMessage: function() {
                console.log(this.message);
            }
        };
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = initInstance();
            }
            return instance;
        }
    }
})();

var first = singleton.getInstance();
var second = singleton.getInstance();
console.log(first === second);

console.log(second.message);

first.message = 'world';
console.log(second.message);