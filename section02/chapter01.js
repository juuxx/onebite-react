// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// if (!f1) {
//   console.log("f1 is falsy");
// }

// 2. Truthy한 값
// -> 7가지 falsy한 값을 제외한 나머지 값들은 모두 truthy한 값이다.
let t1 = 1;
let t2 = 1n;
let t3 = "hello";
let t4 = [];
let t5 = {};
let t6 = () => {};

// 3.활용사례

function printName(person) {
  if (!person) {
    console.log("person is undefined or null");
    return;
  }
  conseole.log(person.name);
}

let person;
printName(person);
