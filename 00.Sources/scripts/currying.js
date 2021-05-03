function multiplyThree(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
        };
    };
}

console.log(multiplyThree(4)(8)(2));

Function.prototype.curry = function(one) {
    var origFunc = this;
    var target = origFunc.length;
    var args = [];
    function next(nextOne) {
        args = args.concat(nextOne);
        if (args.length === target) {
            return origFunc.apply(null, args);
        } else {
            return function(nextOne) {
                return next(nextOne);
            };
        }
    }
    return next(one);
}

function multiplyFive(a, b, c, d, e, f) {
    return a * b * c * d * e * f;
}

console.log(multiplyFive.curry(1)(2)(3)(4)(5)(6));