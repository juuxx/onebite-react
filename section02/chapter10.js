// 1. Date 객체를 생성하는 법
let date1 = new Date();
console.log(date1); // -> 현재 날짜와 시간

let date2 = new Date("2023/10/01/10:10:10");
console.log(date2);

// 2.타임스탬프
// 특정시간이 "1970년 1월 1일 00:00:00" 부터 몇 밀리초가 지났는지 의미하는 숫자값
// UTC -> 협정시간
let ts1 = date1.getTime(); // -> 1696125600000
console.log(ts1); // -> 1696125600000
let date4 = new Date(ts1); // -> 2023-10-01T01:00:00.000Z
console.log(date4); // -> 2023-10-01T01:00:00.000Z

// 3.시간 요소들을 추출하는 방법
let year = date1.getFullYear(); // -> 2023
let month = date1.getMonth() + 1; // -> 9 (0부터 시작)
let date = date1.getDate(); // -> 1

let hours = date1.getHours(); // -> 10
let minutes = date1.getMinutes(); // -> 10
let seconds = date1.getSeconds(); // -> 10

console.log(year, month, date, hours, minutes, seconds); // -> 2023 9 1 10 10 10

// 4. 시간 수정하기
date1.setFullYear(2024); // -> 2024년으로 수정
date1.setMonth(10); // -> 11월로 수정 (0부터 시작)
date1.setDate(25); // -> 25일로 수정
date1.setHours(12); // -> 12시로 수정
date1.setMinutes(30); // -> 30분으로 수정
date1.setSeconds(45); // -> 45초로 수정
console.log(date1); // -> 2024-11-25T03:30:45.000Z

// 5.시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // -> Mon Nov 25 2024 12:30:45 GMT+0900 (KST)
console.log(date1.toLocaleString()); // -> Mon Nov 25 2024 12:30:45 GMT+0900 (KST)
