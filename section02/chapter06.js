// 1. 배열 순회
let arr = [1, 2, 3];
//배열의 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for of 반복문
let arr2 = [4, 5, 6, 7, 8];
for (let item of arr2) {
  console.log(item); // -> 4 5 6 7 8
}

// 2. 객체 순회
let person = {
  name: "John",
  age: 27,
  address: "Seoul",
};

// object의 keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
//console.log(keys); // -> ['name', 'age', 'address']
// for (let i = 0; i < keys.length; i++) {
//   console.log(person[keys[i]]); // -> John 27 Seoul
// }
for (let key of keys) {
  const value = person[key];
  console.log(key, value); // -> John 27 Seoul
}

// Object.values 사용 -> VLAUE값만 !
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values); // -> ['John', 27, 'Seoul']
for (let value of values) {
  console.log(value); // -> John 27 Seoul
}
// for in
for (let key in person) {
  console.log(key, person[key]); // -> name John age 27 address Seoul
}

// for of -> 배열에만 사용 가능
// for in -> 객체에만 사용 가능
