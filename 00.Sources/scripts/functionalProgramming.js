/*
�Լ��� ���α׷���
    - �Է��� �����ؾ��� (�����Լ�)
    - ���ۿ�(�λ깰)�� �������
    - �Լ��� �����͸� �������� �����ؾ���
    - �ݺ����� �����ϰ� ����Լ��� ����ؾ���
*/

var arr = [1,2,3,4,5];
var map = arr.map(function(x) {
    return x * 2;
});

console.log(arr);
console.log(map);

var condition = function(x) {
    return x % 2 === 0;
};

// �Էµ��� ���� �Լ� condition ����
var ex_notFuntional = function(array) {
    return array.filter(condition);
};
console.log(ex_notFuntional(arr));

// �Լ��� �Է¹޾� �����Լ��� ���� ����
var ex_functional = function(array, cond) {
    return array.filter(cond);
};
console.log(ex_functional(arr, condition));

var sum = 0;
for (var i = 1; i <= 10; i++){
    sum += i;
}
console.log(sum);

var sum = 0;
// �ݺ��� ��� ����Լ��� ���� ����
function add (sum, count) {
    sum += count;
    if (count > 0) {
        return add(sum, count - 1);
    }else {
        return sum;
    }
}
console.log(add(0, 10));

var arr = [1,2,3,4,5,6,7,8,9,10];
var sum = arr.reduce(function(prev, cur) {
    return prev + cur;
});
console.log(sum);