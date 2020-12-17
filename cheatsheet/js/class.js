class Car {
  // 생성자(params )
  constructor(brand) {
    this.carName = brand;
  }

  present() {
    return "I have a " + this.carName;
  }
}

const car = new Car("bmw");
console.log(car.present());
