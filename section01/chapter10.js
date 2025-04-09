// 함수
function getArea() {
  function another() {
    console.log("another"); //중첩함수
  }
  let width = 10;
  let height = 20;
  let area = width * height;
  another();
  console.log(area);
}

getArea(); // -> 200
getArea2(10, 20); // -> ReferenceError: getArea2 is not defined

const getArea2 = (width, height) => {
  return width * height;
};

console.log(getArea2(10, 20)); // -> 200

// 호이스팅
// -> 끌어올리다 의 의미
//자바스크립트는 **함수 선언식(function declaration)**을 호이스팅해서, 위에서 호출해도 문제 없음.
//const로 선언된 건 변수 호이스팅은 되지만 초기화 전이라 에러 발생.

//자바는 컴파일 타임 언어라서 호이스팅이라는 개념은 없음.
//대신, 메서드를 어디에 선언했는지는 상관없이 클래스 안에만 있으면 컴파일러가 다 알아서 찾아줌.
