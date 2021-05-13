// ************************
// �� Reference
// ************************
/*
���� �� ������ ����
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
// �� Object
// ************************

// ��ü ���� �� ���ͷ� ���� ���
// bad
const item0 = new Object();
// good
const item1 = {};

// ���� �Ӽ��� ��ü ���� �� �Ӽ� ���� ���
// - ��ü ��� �Ӽ��� �Ѱ����� ���� ����
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

// �޼ҵ� ���� ���� �̿�
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

// �Ӽ� ���� ���� �̿�
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