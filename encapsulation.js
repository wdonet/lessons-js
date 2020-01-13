// The function supplies a closure scope which you can use to keep some data private
console.log(' === with normal Functions ===');
const Name = function() {  // Do not work using ()=>{} 
  this.name = 'ozz'; // public property
  let lastName = 'herr'; // private
  //priviledge functions
  this.get = () => `${this.name} ${lastName}`;
  this.setName = (n) => this.name = n;
  this.setLastName = (l) => lastName = l;
}
let ozz = new Name();
console.log('get', ozz.get());
ozz.name ='Mark';
ozz.lastName = 'Smith';
console.log('get', ozz.get());

console.log(' === with Factory Functions (closures) ===');
const clickerFactory = () => {
  let clicks = 0;
  const log = () => console.log(clicks);
  const click = () => clicks++;
  return { log, click };
}
const clicker = clickerFactory();
clicker.log();
clicker.click();
clicker.click();
clicker.clicks = 86;
clicker.log();
console.log(JSON.stringify(clicker));


console.log(' === with Classes ===');
class Counter {
  #count = 0;
  constructor() {
    this.#count = 0;
  }
  get = () => this.#count;
  click = () => this.#count++;
}
let counter = new Counter();
counter.click();
console.log(`counter ${counter.get()}`);
// counter.#count = 50; // Err: Private field '#count' must be declared in an enclosing class
// console.log(`counter ${counter.get()}`);
