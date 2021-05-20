// ************************
// �� Destructuring
// ************************

// �� ��ü ����ȭ : ��ü �ݺ����� ������ ����
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

// �� �迭 ����ȭ
var arr = [1,2,3,4];
// bad
var first = arr[0];
var second = arr[1];
// good
var [first, second] = arr;

// �� ���� �� ��ȯ �� ��ü ����ȭ ���
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
var [left, __, up] = processInputBad(input); // ��ȯ ���� ����ؾ��� bad!
console.log(left, up);

var {left, up} = processInputGood(input); // �ʿ��� �����͸� ���� good!
console.log(left, up);