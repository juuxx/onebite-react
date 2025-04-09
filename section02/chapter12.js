// function task(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum); // 콜백 함수 호출
//   }, 3000); // 3초 후에 실행
// }

// task(1, 4, (value) => {
//   console.log(value); // -> 5
// }); // -> Task is done! 3초 후에 실행

function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000); // 3초 후에 실행
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const ffood = `얼린 ${food}`;
    callback(ffood);
  }, 1500);
}

function cooldowndFood(food, callback) {
  setTimeout(() => {
    const fcoolDownFood = `식은 ${food}`;
    callback(fcoolDownFood);
  }, 3000); // 3초 후에 실행
}

orderFood((food) => {
  console.log(`주문한 음식은 ${food}입니다.`);
  cooldowndFood(food, (coolDownFood) => {
    console.log(`주문한 음식은 ${coolDownFood}입니다.`);
    freezeFood(coolDownFood, (ffood) => {
      console.log(`주문한 음식은 ${ffood}입니다.`);
    });
  });
});
