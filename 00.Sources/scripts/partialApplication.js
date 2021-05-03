var plus = function (a, b, c) {
    return a + b + c;
};

Function.prototype.partial = function() {
    var args = [].slice.apply(arguments);
    var self = this;
    return function() {
        return self.apply(null, args.concat([].slice.apply(arguments)));
    };
};

var plusA = plus.partial(1);
var plusB = plus.partial(2);
var plusC = plus.partial(1, 3);

console.log(plusA(2, 3));
console.log(plusB(2, 3));
console.log(plusC(9, 3));

// bind 함수 이용 시
var plusA = plus.bind(null, 1);
var plusB = plus.bind(null, 1, 2);
var plusC = plus.bind(null, 1, 2, 3);

console.log(plusA(2, 3));
console.log(plusB(3));
console.log(plusC());