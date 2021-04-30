var example = {
    "stringifyMe": "please",
    "andParseMe": "thank you"
};

var string = JSON.stringify(example);
var parsed = JSON.parse(string);

console.log(string);
console.log(parsed);

var obj = { test: "yes"};
var obj2 = obj;
var obj3 = JSON.parse(JSON.stringify(obj)); // deep copy

obj.test = "no";
console.log("obj : " + obj.test);
console.log("obj2 : " + obj2.test);
console.log("obj3 : " + obj3.test);