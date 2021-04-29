var x = "global";
function ex() {
    // var x = "local";
    x = "change";
}

ex();
console.log(x);



var name = "zero";
function outer() {
    console.log("outer", name);
    function inner() {
        var enemy = "nero";
        console.log("inner", name);
    }
    inner();
}
outer();
// console.log(enemy); // undefined



var name = "zero";
function log() {
    console.log(name);
}

function wrapper() {
    name = "nero";
    log();
}

wrapper();



var name = "zero";
function log() {
    console.log(name);
}

function wrapper2() {
    var name = "nero";
    log();
}

wrapper2();

var obj = {
    x: "local",
    y: function() {
        console.log(this.x);
    }
}

console.log(obj);



var another = function() {
    var x = "local";
    function y() {
        console.log(x);
    }

    return { y: y };
}
var newScope = another();

console.log(newScope);

// 즉시 호출 함수 표현식 (IIFE)
var anotherIIFE = (function() {
    var x = "local";
    return {
        y: function() {
            alert(x);
        }
    }
})();

anotherIIFE;