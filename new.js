/**
 * The new keyword does the following things:
  - Creates a blank, plain JavaScript object;
  - Links (sets the constructor of) this object to another object;
  - Passes the newly created object from Step 1 as the this context;
  - Returns this if the function doesn't return its own object.
 */

// With functions
function Car(make, model, year) {
  Object.assign(this, { make, model, year });
}
const chevy = new Car('Chevy', 'Pop', 1998);
console.log(JSON.stringify(chevy));

// With arrow functions

// const Computer = (make, os, version) => {
//   Object.assign(this, { make, os, version });
// }
// const macbook = new Computer('mac', 'bookpro', 2017); // TypeError: Computer is not a constructor
// better
const computerCreator = (make, os, version) => {
  // 'this' is at global scope using arrow functions
  return Object.assign(this, { make, os, version });
  // return { make, os, version }; //better
}
const macbook = computerCreator('mac', 'bookpro', 2017);
console.log(JSON.stringify(macbook));
console.log(this.make);
console.log(this.os);
console.log(this.version);

