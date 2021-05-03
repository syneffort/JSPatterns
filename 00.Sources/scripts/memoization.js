var factorial = (function() {
    var save = {};
    var fact = function(number) {
        if (number > 0) {
            var saved = save[number - 1] || fact(number - 1);
            var result = number * saved;
            save[number] = result;
            console.log(saved, result);
            return result;
        } else {
            return 1;
        }
    };
    return fact;
})();

factorial(7);
factorial(7);

var fibonacci = (function() {
    var save = {};
    var fibo = function(number) {
        if (number < 2) {
            return number;
        } else {
            var save1 = save[number - 1] || fibo(number - 1);
            var save2 = save[number - 2] || fibo(number - 2);
            var result = save1 + save2;
            save[number] = result;
            console.log(save1, save2, result);
            return result;
        }
    };
    return fibo;
})();

fibonacci(10);
fibonacci(10);