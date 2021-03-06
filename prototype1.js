function Car(manuf, type) {
    this.manufacturer = manuf;
    this.type = type;
  }

  Car.prototype.wheels = 4;
  Car.prototype.getWheels =
    function () {
      return this.wheels;
    }
  Car.prototype.name = "Car";

  var car1 = new Car("Honda", "CR-V");
  var car2 = new Car("BMW", "X5");

  console.log("--- Car 1:")
  console.log(car1.getWheels());
  console.log(car1.name);
  console.log(car1.manufacturer);
  console.log(car1.type);
  console.log("--- Car 2:")
  console.log(car2.getWheels());
  console.log(car2.name);
  console.log(car2.manufacturer);
  console.log(car2.type);