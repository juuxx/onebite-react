// 6가지의 요소 조작 메서드
//1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6);
// push는 배열의 길이를 반환

console.log(arr1); // -> [1, 2, 3, 4, 5, 6]
console.log(newLength); // -> 6

//2. pop
// 배열의 맨 뒤에 있는 요소 제거하고 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();
console.log(arr2); // -> [1, 2]
console.log(popedItem); // -> 3

//3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3); // -> 1 [2, 3]

//4. unshift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr4 = [1, 2, 3];
let newLength2 = arr4.unshift(0);
console.log(newLength2, arr4); // -> 4 [0, 1, 2, 3]
// unshift는 push와 다르게 배열의 길이를 반환

//shift와 unshift는 비교적 느리게 동작(O(n))
// -> 배열의 길이에 비례해서 느려짐

//5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내어 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2); // 2번 인덱스부터 끝까지
let sliced3 = arr5.slice(-2); // 뒤에서 2개
console.log(sliced2); // -> [3, 4, 5]
console.log(sliced); // -> [3, 4, 5]
console.log(sliced3); // -> [4, 5]
// slice는 원본 배열을 건드리지 않음
console.log(arr5); // -> [1, 2, 3, 4, 5]

// 6. concat
// 두개 이상의 배열을 합쳐서 새로운 배열로 반환
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
let conctedArr = arr6.concat(arr7);
console.log(conctedArr); // -> [1, 2, 3, 4, 5, 6]
// concat은 원본 배열을 건드리지 않음
