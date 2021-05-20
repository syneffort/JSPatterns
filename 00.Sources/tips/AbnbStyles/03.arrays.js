// ************************
// ★ Arrays
// ************************

// ▶ 배열 생성 시 리터럴 문법 사용
// bad
var items = new Array();
// good
var itmes = [];

// ▶ 배열에 직접 값 할당 대신 push 사용
// bad
const someStack = [];
someStack[someStack.length] = 'abracadabra';
// good
someStack.push('abracadabra');
console.log(someStack);

// ▶ 배열에 복사 시 전개구문 사용
// bad
var items = [ 5, 4, 3, 2, 1 ];
var itemsCopy = [];
for (let i = 0; i < items.length; i++) {
    itemsCopy[i] = items[i];
}
// good
var itemsCopy = [...items];

// ▶ 순회 가능한 객체(iterable object)를 배열로 변환할 때 전개구문
var foo = document.querySelectorAll('#clickMe');
console.log(foo);
// good
var nodes = Array.from(foo);
console.log(nodes);
// best
var nodes = [...foo];
console.log(nodes);

// ▶ array-like 객체를 배열로 변환 시 Array.from 사용
var arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
// bad
var arr = Array.prototype.slice.call(arrLike);
console.log(arr);
// good
var arr = Array.from(arrLike);
console.log(arr);

// ▶ 매핑 시 전개구문 대신 Array.from 사용
// - 중간 배열 생성 방지
var foo = [ 1, 2, 3, 4, 5 ];
// bad
var bar = [...foo].map(x => x * x);
console.log(bar);
// good
var bar = Array.from(foo, x => x * x);
console.log(bar);

// ▶ 배열 메소드 콜백에는 리턴 구문 사용
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