const car = {
  wheels: 4,
  color: "red",
  drive: function () {
    console.log("boom boom");
  },
};


console.log(car.color)
car.drive();
console.log(car);
console.log(Object.keys(car)[0]);
console.log(typeof Object.keys(car)[0]);
