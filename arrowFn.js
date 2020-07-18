// ES6 introduces arrow functions () => {}
// At fn, 'this' points to the scope of the caller
// At arrow, 'this' points to the scope where it was defined

this.x = 123; // GLOBAL scope
let obj = {
  x: 456, // obj scope
  fnX: function() { return this.x; },
  arrowX: () => this.x
}
console.log('fnX', obj.fnX());
console.log('arrowX', obj.arrowX());

// Bind or call to insert a different context
let otherObj = { x: 901 };
console.log('fnX bound', obj.fnX.bind(otherObj)());
console.log('arrowX bound', obj.arrowX.bind(otherObj)()); // bind,apply,call are useless with arrow fns
