// ************************
// ★ Object
// ************************

// ▶ 객체 생성 시 리터럴 문법 사용
// bad
const item0 = new Object();
// good
const item1 = {};

// ▶ 동적 속성의 객체 생성 시 속성 계산식 사용
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

// ▶ 메소드 단축 구문 이용
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

// ▶ 속성 단축 구문 이용
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

// ▶ 유효하지 않은 식별자에만 따옴표 속성 사용

// bad
var bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
}
console.log({ bad });

// bad
var good = {
    foo: 3,
    bar: 4,
    'data-blah': 5, // - 는 따옴표 없이 처리 불가
}
console.log({ good });

// ▶ 객체 얕은복사

// very bad
var original = { a: 1, b: 2};
var copy = Object.assign(original, { c: 3}); // original 객체가 변조됨
delete copy.a;
console.log({ original });
console.log({ copy });

// bad
var original = { a: 1, b: 2};
var copy = Object.assign({}, original, { c: 3 });
delete copy.a;
console.log({ original });
console.log({ copy });

// good
var original = { a: 1, b: 2};
var copy = { ...original, c: 3};
console.log({ original });
console.log({ copy });

const { a, ...noA } = copy;
console.log({ noA });