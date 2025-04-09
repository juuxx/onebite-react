console.log("chapter06");

let inf = Infinity;
let minf = -Infinity;

let nan = NaN; // 수치연산의 실패값
let n = null;

let myName = "홍길동";
let myLocation = "서울";

let introduction = `${myName}은 ${myLocation}에 삽니다`;
console.log(introduction);
// 템플릿 리터럴 문법

const strToNum2 = parseInt("10개");
console.log(strToNum2);

const strToNum3 = parseInt("asdfadf10");
console.log(strToNum3); // -> NaN
// === 타입까지 비교

console.log(typeof n);
