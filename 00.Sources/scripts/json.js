var example = {
    "stringifyMe": "please",
    "andParseMe": "thank you"
};

var string = JSON.stringify(example);
var parsed = JSON.parse(string);

console.log(string);
console.log(parsed);