// ************************
// ★ Function
// ************************


// ▶ 함수 선언식 대신 기명 함수 표현식 사용
// - 함수 선언식은 호이스팅 됨. 가독성과 유지관리성을 해칠 수 있음
// bad : 호이스팅 됨
function foo() {
    console.log('foo');
}
// bad : 호이스팅 되지 않으나 무명함수이기 때문에 유지 어려움
const bar = function() {
    console.log('bar');
};
// good : 호이스팅 되지 않고 기명함수임. 디버깅 용이함
const short = function longUniqueMoreDescriptiveFunctionName() {
    console.log('baz');
};

// ▶ 즉시 호출 함수 표현식 괄호로 감싸기
// - IIFE는 하나의 단위. 괄호로 감싸 내부 표현을 명확하게 함.
(function() {
    console.log('Welcom to IIFE!');
}());

// 함수 외 블록(if, while 등)에서 함수 선언 금지
// - 에러는 없으나 브라우저마다 해석이 달라질 수 있음
// bad
currentUser = 1;
if (currentUser) {
    function test() {
        console.log('Nope.');
    }
}
// good
let test;
if (currentUser) {
    test = () => console.log('Yup.');
}

// ▶ 매개변수 이름 arguments 금지
// - arguments 객체 참조를 덮어써버림
// bad
function foo(name, options, arguments) {

}
// good
function foo(name, options, args) {
    
}

// ▶ 절대 arguments 사용 금지. 대신 rest syntax(...) 사용
// - 몇 개의 매개변수를 이용하고 싶은지 확실하게 할 수 있음
// - arguments : array-like, rest arguments : array
// bad
function concatenateAllBad() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
}
// good
function concatenateAllGood(...args) {
    return args.join('');
}

console.log(concatenateAllBad('hello','world','this','is','js'));
console.log(concatenateAllGood('hello','world','this','is','js'));

// ▶ 함수 인자 변조 대신 기본 매개변수 문법 사용
// really bad
function handleThingsRB(opts) {
    opts = opts || {};
}
// still bad
function handleThingsB(opts) {
    if (opts === void 0) { // void 0 or void(0) === undefined
        opts = {};
    }
}
// good
function handleThingsG(opts = {}) {

}

// ▶ 가변 인자 함수 호출 시 전개구문 사용
// bad
var x = [1,2,3,4,5];
console.log.apply(console, x);
// good
console.log(...x);