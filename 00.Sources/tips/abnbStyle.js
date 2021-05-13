// ************************
// ★ Reference
// ************************
/*
변수 별 스코프 인지
var : function scope
const, let : block scope
*/

// bad
var count = 1;
if (true) {
    count += 1;
}
console.log(count);

// good
let count2 = 1;
if (true) {
    count2 += 1;
}
console.log(count2);

{
    let a = 1;
    const b = 1;
}
// console.log(a); // ReferenceError
// console.log(b); // ReferenceError

// ************************
// ★ Object
// ************************

// 객체 생성 시 리터럴 문법 사용
// bad
const item0 = new Object();
// good
const item1 = {};

// 동적 속성의 객체 생성 시 속성 계산식 사용
// - 객체 모든 속성을 한곳에서 정의 가능
function getKey(k) {
    return `dynamicProperty${k}`;
}

// bad
const obj0 = {
    id: 5,
    name: 'San Francisco',
};
obj0[getKey('Enable')] = true;
console.log(obj0.dynamicPropertyEnable);

// good
const obj1 = {
    id: 5,
    name: 'San Francisco',
    [getKey('Enable')]: true,
}
console.log(obj1.dynamicPropertyEnable);

// 메소드 단축 구문 이용
// bad
const atom0 = {
    value: 1,
    
    addValue: function(value) {
        return atom0.value + value;
    },
};
console.log(atom0.addValue(10));

// good
const atom1 = {
    value: 1,

    addValue(value) {
        return atom1.value + value;
    }
};
console.log(atom1.addValue(10));

// 속성 단축 구문 이용
const lukeSkyWalker = 'Luke Skywalker';

// bad 
const luke0 = {
    lukeSkyWalker : lukeSkyWalker,
}
console.log(luke0.lukeSkyWalker);

// good
const luke1 = {
    lukeSkyWalker : lukeSkyWalker,
}
console.log(luke0.lukeSkyWalker);