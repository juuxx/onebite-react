//객체간의 기본 연산은 기본적으로 참조값으로 비교
let o1 = { name: "Hong" };
let o2 = o1;
let o3 = { ...o1 };

console.log(o1 === o2); // -> true
console.log(o1 === o3); // -> false 얕은 비교

console.log(JSON.stringify(o1) === JSON.stringify(o3)); // -> true 깊은 비교

// 배열과 함수도 사실 객체다
