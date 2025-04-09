// 5가지의 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
console.log(doubledArr); // -> [2, 4, 6]

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
console.log(arr2.includes(3)); // -> true

// 3. indexOf
// 배열에 특정 요소가 있는지 확인하는 메서드
// -> 요소가 있는 경우, 그 인덱스를 반환, 없는 경우 -1 반환
let arr3 = [1, 2, 3];
console.log(arr3.indexOf(2)); // -> 1
// 여러개 있을 경우 맨 앞에거 출력
console.log(arr3.indexOf(5)); // -> -1

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 첫번째 요소의 인덱스를 반환
// -> 만족하는 요소가 없는 경우 -1 반환
let arr4 = [1, 2, 3];
const findIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});

const findIndex2 = arr4.findIndex((item) => item % 2 !== 0);

console.log(findIndex2); // -> 1

// indexOf 는 객체값을 찾을 수 없음 (얕은 비교 때문)
// findIndex 는 객체값을 찾을 수 있음
let objArr = [
  { name: "John", age: 27 },
  { name: "Jane", age: 28 },
  { name: "Jack", age: 29 },
];

console.log(objArr.indexOf({ name: "John", age: 27 })); // -> -1
console.log(objArr.findIndex((item) => item.name === "John")); // -> 0

//5. find
// 모든 요소를 순회하면서, 콜백함수를 만족하는 첫번째 요소를 반환
// -> 만족하는 요소가 없는 경우 undefined 반환
const finded = objArr.find((item) => item.name === "John");
console.log(finded); // -> { name: 'John', age: 27 }
