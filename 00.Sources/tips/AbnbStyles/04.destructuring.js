// ************************
// ★ Destructuring
// ************************

// ▶ 객체 비구조화 : 객체 반복적인 접근을 방지
// bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;

    return `${firstName} ${lastName}`;
}
// good
function getFullName(user) {
    const {firstName, lastName} = user;
    return `${firstName} ${lastName}`;
}
// best
function getFullName({firstName, lastName}) {
    return `${firstName} ${lastName}`;
}

// ▶ 배열 비구조화
var arr = [1,2,3,4];
// bad
var first = arr[0];
var second = arr[1];
// good
var [first, second] = arr;

// ▶ 여러 값 반환 시 객체 비구조화 사용
// bad
function processInputBad(input) {
    return [input.left, input.right, input.up, input.down];
}
// good
function processInputGood(input) {
    const { left, right, up, down } = input;
    return { left, right, up, down };
}

var input = {
    left: 1,
    right: 2,
    up: 3,
    down: 4,
};
var [left, __, up] = processInputBad(input); // 반환 순서 고려해야함 bad!
console.log(left, up);

var {left, up} = processInputGood(input); // 필요한 데이터만 선택 good!
console.log(left, up);