// ************************
// �� Arrays
// ************************

// �� �迭 ���� �� ���ͷ� ���� ���
// bad
var items = new Array();
// good
var itmes = [];

// �� �迭�� ���� �� �Ҵ� ��� push ���
// bad
const someStack = [];
someStack[someStack.length] = 'abracadabra';
// good
someStack.push('abracadabra');
console.log(someStack);

// �� �迭�� ���� �� �������� ���
// bad
var items = [ 5, 4, 3, 2, 1 ];
var itemsCopy = [];
for (let i = 0; i < items.length; i++) {
    itemsCopy[i] = items[i];
}
// good
var itemsCopy = [...items];

// �� ��ȸ ������ ��ü(iterable object)�� �迭�� ��ȯ�� �� ��������
var foo = document.querySelectorAll('#clickMe');
console.log(foo);
// good
var nodes = Array.from(foo);
console.log(nodes);
// best
var nodes = [...foo];
console.log(nodes);

// �� array-like ��ü�� �迭�� ��ȯ �� Array.from ���
var arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
// bad
var arr = Array.prototype.slice.call(arrLike);
console.log(arr);
// good
var arr = Array.from(arrLike);
console.log(arr);

// �� ���� �� �������� ��� Array.from ���
// - �߰� �迭 ���� ����
var foo = [ 1, 2, 3, 4, 5 ];
// bad
var bar = [...foo].map(x => x * x);
console.log(bar);
// good
var bar = Array.from(foo, x => x * x);
console.log(bar);

// �� �迭 �޼ҵ� �ݹ鿡�� ���� ���� ���
// good
[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
});

// good
[1, 2, 3].map(x => x * (x + 1));

// bad =>> `acc` becomes undefined after first iteration
// [[0,1],[2,3],[4,5]].reduce((acc, item, index) => {
//     const flatten = acc.concat(item);
//     acc[index] = flatten;
// });

// good
var result = [[0,1],[2,3],[4,5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    acc[index] = flatten;
    return flatten;
});
console.log(result);