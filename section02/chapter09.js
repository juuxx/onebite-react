// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "John", age: 27, hobby: "테니스" },
  { name: "Jane", age: 28, hobby: "축구" },
  { name: "Jack", age: 29, hobby: "테니스" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

console.log(tennisPeople); // -> [{ name: 'John', age: 27, hobby: '테니스' }, { name: 'Jack', age: 29, hobby: '테니스' }]

// 2. map
// 기존 배열의 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행하고 그 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1, 2, 3];
let mapArr = arr2.map((item) => item * 2);
console.log(mapArr); // -> [2, 4, 6]

let names = arr1.map((item) => item.name);
console.log(names); // -> ['John', 'Jane', 'Jack']

// 3. sort
// 배열으리 사전 순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
let sortedArr = arr3.sort();
console.log(sortedArr); // -> ['a', 'b', 'c']

let arr4 = [10, 3, 2];
let sortedArr2 = arr4.sort();
console.log(sortedArr2); // -> [10, 2, 3] (사전식 정렬)
// -> 10이 2보다 작음
// arr4.sort((a, b) => a - b); // 오름차순 정렬
// arr4.sort((a, b) => b - a); // 내림차순 정렬

arr4.sort((a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
});

console.log(arr4); // -> [2, 3, 10]

// 4. toSorted -> ES2022에 추가된 메서드
// 정렬된 새로운 배열을 반환하는 메서드
const sorted = arr3.toSorted();
console.log(sorted);

// 5. join
// 배열의 모든 요소를 특정 구분자로 연결하여 문자열로 반환하는 메서드
let arr5 = ["a", "b", "c"];
let joined = arr5.join(", ");
console.log(joined); // -> a, b, c
