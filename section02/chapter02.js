// // 단락평가
// function returnFalse() {
//   console.log("returnFalse called");
//   return undefined;
// }

// function returnTrue() {
//   console.log("returnTrue called");
//   return 10;
// }

// console.log(returnTrue() || returnFalse()); // false

// 단락평가 활용 사례
function printName(person) {
  //   if (!person) {
  //     console.log("이름이 없습니다.");
  //     return;
  //   }
  //   console.log(person.name);
  const name = person && person.name;
  console.log(name || "이름이 없습니다.");
}

printName();
printName({ name: "John" });
