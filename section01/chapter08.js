// null 병합 연산자 -> nvl 함수와 비슷한 기능을 한다.
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4); // -> 10
let var6 = var2 ?? var3;
console.log(var6); // -> 10

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 1;
var7 = "hello";
console.log(typeof var7); // -> string

// 3. 삼항연산자
