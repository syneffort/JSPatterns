// ************************
// �� Function
// ************************


// �� �Լ� ����� ��� ��� �Լ� ǥ���� ���
// - �Լ� ������� ȣ�̽��� ��. �������� ������������ ��ĥ �� ����
// bad : ȣ�̽��� ��
function foo() {
    console.log('foo');
}
// bad : ȣ�̽��� ���� ������ �����Լ��̱� ������ ���� �����
const bar = function() {
    console.log('bar');
};
// good : ȣ�̽��� ���� �ʰ� ����Լ���. ����� ������
const short = function longUniqueMoreDescriptiveFunctionName() {
    console.log('baz');
};

// �� ��� ȣ�� �Լ� ǥ���� ��ȣ�� ���α�
// - IIFE�� �ϳ��� ����. ��ȣ�� ���� ���� ǥ���� ��Ȯ�ϰ� ��.
(function() {
    console.log('Welcom to IIFE!');
}());

// �Լ� �� ���(if, while ��)���� �Լ� ���� ����
// - ������ ������ ���������� �ؼ��� �޶��� �� ����
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

// �� �Ű����� �̸� arguments ����
// - arguments ��ü ������ ��������
// bad
function foo(name, options, arguments) {

}
// good
function foo(name, options, args) {
    
}

// �� ���� arguments ��� ����. ��� rest syntax(...) ���
// - �� ���� �Ű������� �̿��ϰ� ������ Ȯ���ϰ� �� �� ����
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

// �� �Լ� ���� ���� ��� �⺻ �Ű����� ���� ���
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

// �� ���� ���� �Լ� ȣ�� �� �������� ���
// bad
var x = [1,2,3,4,5];
console.log.apply(console, x);
// good
console.log(...x);