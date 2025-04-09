// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
//console.log(arr2); // -> [4, 1, 2, 3, 5, 6]

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
console.log(obj2); // -> { a: 1, b: 2, c: 3, d: 4 }

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1); // -> funcA(1, 2, 3)와 동일

// 2. Rest 매개변수
// -> Rest 는 : 나머지, 남은 것이라는 뜻

function funcB(a, ...args) {
  console.log(a); // -> 1
  console.log(args); // -> [1, 2, 3, 4, 5]
}

funcB(...arr1);
