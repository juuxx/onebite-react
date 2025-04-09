// 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; // 객체 리터럴

// 객체 프로퍼티
let persons = {
  name: "홍길동",
  age: 27,
  location: "서울",
  hobby: "독서",
  "like cat": true,
};

// 객체 프로피터를 다루는 방법
// 특정 프로퍼티 접근
let name = persons.name; // -> 홍길동
let age = persons["age"]; // -> 27

let property = "location";
let location1 = persons[property]; // -> 서울
console.log(location1);

// 프로퍼티 추가
persons.job = "개발자"; // -> 프로퍼티 추가
persons["favorite food"] = "피자"; // -> 프로퍼티 추가

console.log(JSON.stringify(persons)); // -> {name: "홍길동", age: 27, location: "서울", hobby: "독서", like cat: true, job: "개발자", favorite food: "피자"}

// 프로퍼티 수정
persons.age = 30; // -> 프로퍼티 수정
persons["location"] = "부산"; // -> 프로퍼티 수정
console.log(JSON.stringify(persons));

// 프로퍼티 삭제
delete persons.hobby; // -> 프로퍼티 삭제
delete persons["like cat"]; // -> 프로퍼티 삭제
console.log(JSON.stringify(persons)); // -> {name: "홍길동", age: 30, location: "부산", like cat: true, job: "개발자", favorite food: "피자"}

// 프로퍼티 존재 유무
let result1 = "cat" in persons; // -> true
console.log(result1);
