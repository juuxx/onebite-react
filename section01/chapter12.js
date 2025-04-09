function funcA() {
  console.log("Function A");
}

let varA = funcA;
varA();

// 함수표현식
let varB = function () {
  console.log("Function B");
};

varB(); // -> Function B
//funcB 로 못 부름 -> 그래서 익명함수로 부름

let varC = (value) => value + 1;
console.log(varC(10)); // -> 1
