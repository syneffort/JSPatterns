var factorial = function(number) {
    var result = 1;
    for (var i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
};

console.log(factorial(5));

// recursion

var factorial_rc = function(number) {
    if (number > 0) {
        return number * factorial_rc(number - 1);
    } else {
        return 1;
    }
};

console.log(factorial_rc(5));