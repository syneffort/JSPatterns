// ************************
// ★ Reference
// ************************
/*
▶ 변수 별 스코프 인지
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