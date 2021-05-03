/*
함수형 프로그래밍
    - 입력이 순수해야함 (순수함수)
    - 부작용(부산물)이 없어야함
    - 함수와 데이터를 중점으로 생각해야함
    - 반복문을 지양하고 재귀함수를 사용해야함
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

// 입력되지 않은 함수 condition 사용됨
var ex_notFuntional = function(array) {
    return array.filter(condition);
};
console.log(ex_notFuntional(arr));

// 함수를 입력받아 순수함수로 구현 가능
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
// 반복문 대신 재귀함수로 구현 가능
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