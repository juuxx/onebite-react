const orderFood = (food) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const food = "떡볶이";
      resolve(food);
    }, 3000); // 3초 후에 실행
  });
};

const cooldownFood = (food) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const cooldownFood = `식은 ${food}`;
      resolve(cooldownFood);
    }, 3000); // 3초 후에 실행
  });
};

const freezeFood = (food) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const freezeFood = `식은 ${food}`;
      resolve(freezeFood);
    }, 3000); // 3초 후에 실행
  });
};

orderFood()
  .then((food) => {
    console.log(`주문한 음식은 ${food}입니다.`);
    return cooldownFood(food);
  })
  .then((cooldownFood) => {
    console.log(`주문한 음식은 ${cooldownFood}입니다.`);
    return freezeFood(cooldownFood);
  })
  .then((freezeFood) => {
    console.log(`주문한 음식은 ${freezeFood}입니다.`);
  });
