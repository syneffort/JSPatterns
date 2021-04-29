var counter = function() {
    var count = 0;
    function changeCount(number) {
        count += number;
    }

    return {
        increase: function() {
            changeCount(1);
        },
        decrease: function() {
            changeCount(-1);
        },
        show: function() {
            alert(count);
        }
    }
};

var counterClosure = counter();
counterClosure.increase();
counterClosure.show();
counterClosure.decrease();
counterClosure.show();