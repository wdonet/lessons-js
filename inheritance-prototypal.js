function Car(make) {
  this.make = make;
}

Car.prototype.show = function() {
  console.log(`> ${JSON.stringify(this)}`);
}

function SportCar(motorSpeed, make) {
  this.motorSpeed = motorSpeed;
  Car.call(this, make);
}

// Prototypal Inheritance
SportCar.prototype = Object.create(Car.prototype);
SportCar.prototype.constructor = SportCar;

let kia = new Car('Kia');
let lamborgini = new SportCar('fast', 'lamborgini');

console.log('kia instanceof Car >', kia instanceof Car);
console.log('lamborgini instanceof SportCar >', lamborgini instanceof SportCar);
console.log('lamborgini instanceof Car >', lamborgini instanceof Car);

