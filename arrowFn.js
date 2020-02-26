// ES6 introduces arrow functions () => {}
// At fn, 'this' points to the scope of the caller
// At arrow, 'this' points to the scope where it was defined

// let fn = function() {
//   return this.x;
// }
// let arrow = () => {
//   return this.x;
// };

// function testWithFn(name, callback) {
//     this.x = 999;
//     console.log(name, ':', callback());
// }
// testWithFn('fn', fn); // 999
// testWithFn('arrow', arrow); // undefined


// let testWithArrow = (name, callback) => {
//     this.x = 55;
//     console.log(name, '=>', callback());
// }
// testWithArrow('fn', fn); // 999 ??
// testWithArrow('arrow', arrow); // 55

// console.log('>>>>>>');
// console.log('GLOBAL this.x ?', this.x);
// console.log('fn', fn()); // 999 ??


this.x = 123; // GLOBAL scope
let obj = {
  x: 456, // obj scope
  fnX: function() { return this.x; },
  arrowX: () => this.x
}
console.log('fnX', obj.fnX());
console.log('arrowX', obj.arrowX());
let otherObj = { x: 901 };
console.log('fnX bound', obj.fnX.bind(otherObj)());
console.log('arrowX bound', obj.arrowX.bind(otherObj)()); // bind,apply,call are useless with arrow fns
