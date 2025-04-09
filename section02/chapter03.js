//1. 배열의 구조 분해 할당
let arr = [1, 2, 3];
let [one, two, three] = arr;
console.log(one, two, three); // -> 1 2 3

let [a, b, c, d = 4] = arr;
console.log(a, b, c, d);

// 2. 객체의 구조분해 할당
let person = {
  name: "John",
  age: 27,
  address: "Seoul",
};

let { name, age, address, extra } = person;
console.log(name, age, address, extra); // -> John 27 Seoul

//3. 객체의 구조분해 할당을 이융해서 함수의 매개변수를 받는 방법
const func = ({ name, age, address }) => {
  console.log(name, age, address);
};

func(person); // -> John 27 Seoul
