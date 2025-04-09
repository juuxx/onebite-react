function main(value) {
  console.log(value);
  value();
}

// function sub() {
//   console.log("i am sub function");
// }

// main(sub);

main(() => {
  console.log("i am sub function");
});

function repeat(count, callback) {
  for (let i = 0; i < count; i++) {
    //console.log(i);
    callback(i);
  }
}

// function repeatDobule(count) {
//   for (let i = 1; i <= count; i++) {
//     console.log(i * 2);
//   }
// }

repeat(5); // -> 0 1 2 3 4
// repeatDobule(5); // -> 2 4 6 8 10

repeat(5, (i) => {
  console.log(i * 2);
});
