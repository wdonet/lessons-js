// ES6 introduces symbols
// Unique identifiers
// - add properties to objects
// - they are not iterable

let symbol = Symbol('debug');
console.log(symbol.toString(), typeof symbol);

let anotherSymbol = Symbol('debug');
console.log(symbol === anotherSymbol); // same value but different internal ID

let obj = {
    name: 'ozz',
    [symbol]: 22  //symbol above used as key 
}
console.log(obj);