/** Prototypal
 * - When executing a fn(). If the fn isn't found as property, it looks at the prototype chain
 * References:
 * - dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 */
console.log('\n\n -+-+-+-+-+-+-+- ANIMALS +-+-+-+-+-+-+-+-+-+-+-');

function Dog(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.makeSound = function() { return 'Woof!'; }  // this is created for each instance (+ memory)
}
Dog.prototype.bark = function() {  // this is created once on the prototype for all instances
  return 'Woof Woof Woof!!';
}

function SmallDog(name, breed, color) {
  Dog.call(this, name, breed, color);
  function wuf() { return 'wuf'; }
  this.makeSound = wuf;
  this.bark = wuf;
}
SmallDog.prototype = Object.create(Dog.prototype);
SmallDog.prototype.constructor = SmallDog;

const daisy = new Dog('Daisy', 'Labrador', 'black');
const firulais = new Dog('Firulais', 'Snauzer', 'gray');
const jack = Object.assign(Object.create(Dog, {
    name: { writable: true, configurable: true, enumerable: true, value: 'Jack' },
    breed: { value: 'Jack Rusell' }, // by default properties ARE NOT writable, enumerable or configurable:
    color: { value: 'white' }
  }), {
    makeSound() { return 'snirf snirf, wooaof grrr!'; }
  }
);
const mani = new SmallDog('Mani', 'Chihuahua', 'brown');

console.log('Same prototype daisy & jack ?', daisy.__proto__ === jack.__proto__);
console.log('Same prototype daisy & firulais ?', daisy.__proto__ === firulais.__proto__);
console.log('Same makesound() daisy & firulais ?', daisy.makeSound === firulais.makeSound);
console.log('Mani is small dog', mani instanceof SmallDog, 'of color:', mani.color, 'and breed:', mani.breed);
console.log('Mani is also a dog?', mani instanceof Dog);
console.log('Mani\'s proto:', mani.__proto__, 'which is child of:', mani.__proto__.__proto__);
console.log(` - Daisy sounds: ${daisy.makeSound()} and ${daisy.bark()}`);
console.log(` - Firulais sounds: ${firulais.makeSound()} and ${firulais.bark()}`);
console.log(` - Jack sounds: ${jack.makeSound()} with no extra barks`); // jack.bark() is not defined
console.log(` - Mani sounds: ${mani.makeSound()} and ${mani.bark()}`); // jack.bark() is not defined
jack.breed = 'Snauzer Mini'; // not writable prop
console.log(`+ Jack's breed: ${jack.breed}`); // still 'Jack Rusell'


// -----------------------------------------------------------------
console.log('\n\n -+-+-+-+-+-+-+- SHAPES +-+-+-+-+-+-+-+-+-+-+-');
// Shape - SUPERCLASS
function Shape() {
  this.x = 0;
  this.y = 0;
  console.info(`${typeof this} at (${this.x},${this.y})`);
}
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info(`Shape moved to (${this.x},${this.y})`);
};

// Rectangle - SUBCLASS
function Rectangle() {
  Shape.call(this); // call super constructor.
}
// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
//If you don't set Object.prototype.constructor to Rectangle,
//it will take prototype.constructor of Shape (parent).
//To avoid that, we set the prototype.constructor to Rectangle (child).
Rectangle.prototype.constructor = Rectangle;

let rect = new Rectangle();
console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'

//If you wish to inherit from multiple objects, then mixins are a possibility.
