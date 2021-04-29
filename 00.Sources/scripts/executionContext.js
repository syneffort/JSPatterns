// Execution context
var name = "zero";
function wow(word) {
    console.log(word + " " + name);
}

function say() {
    var name = "nero";
    console.log(name);
    wow("hello");
}
say();



// Hoisting
console.log(zero); // undefined

sayWow();
function sayWow() {
    console.log("wow");
}

var zero = "zero";



sayWow2();
// sayYeah();
var sayYeah = function() {
    console.log("yeah");
}
function sayWow2() {
    console.log("wow");
}

// closure
var makeClosure = function() {
    var name = "zero";
    return function() {
        console.log(name);
    }
}

var closer = makeClosure();
closer();