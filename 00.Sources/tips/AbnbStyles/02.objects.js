// ************************
// �� Object
// ************************

// �� ��ü ���� �� ���ͷ� ���� ���
// bad
const item0 = new Object();
// good
const item1 = {};

// �� ���� �Ӽ��� ��ü ���� �� �Ӽ� ���� ���
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

// �� �޼ҵ� ���� ���� �̿�
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

// �� �Ӽ� ���� ���� �̿�
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

// �� ��ȿ���� ���� �ĺ��ڿ��� ����ǥ �Ӽ� ���

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
    'data-blah': 5, // - �� ����ǥ ���� ó�� �Ұ�
}
console.log({ good });

// �� ��ü ��������

// very bad
var original = { a: 1, b: 2};
var copy = Object.assign(original, { c: 3}); // original ��ü�� ������
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