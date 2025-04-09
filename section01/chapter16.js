const person = {
  name: "John",
  // 메서드 선언
  sayHi() {
    console.log("Hi, my name is " + this.name);
  },
};

person.sayHi();
person["sayHi"]();
