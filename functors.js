/**
 *  - Functors -
 * Two important properties:
    1. Identity
    2. Composition
   Since a functor is a mapping between categories, functors must respect identity and composition

   Source : https://medium.com/javascript-scene/functors-categories-61e031bac53f
 */


const trace = label => value => {
  console.log(`${label} => ${value}`);
  return value;
};
const plusOne = n => n + 1;
const double = n => n * 2;

// -- Functor here --
const Identity = value => ({
  map: fn => Identity(fn(value)),
  // needed for using with math operators
  valueOf: () => value,
  // to inspect an Identity instance in the console
  toString: () => `Identity(${value})`,
  // For make it iterable with the standard JS iteration protocol
  [Symbol.iterator]: function*() { yield value },
});

const two = Identity(2);
two.map(trace('before')).map(double).map(trace('after'));
two.map(trace('still 2?'));

// Imperative mode (how to do) - plusOne(double())
two
  .map(n => plusOne(double(n)))
  .map(trace('Imperative')); // 5
// Declarative mode (what data) - composition in place
two
  .map(double)
  .map(plusOne)
  .map(trace('Declarative')); // 5

// '+' operator
const four = Identity(two + two).map(trace('2+2'));
Identity( Identity(four / two) * four).map(trace('4/2 * 4'));
const hi = trace('String concatenation')(Identity('h') + Identity('i'));
// console.log
console.log(four.toString());
// Iterating
const arr = [3, 4, ...Identity(8)]
trace('Iterating')(arr);


// A functor for another functor
const existsPredicate = functor => {
  let val = functor.valueOf();
  return val !== undefined && val !== null;
}
const ifExists = functor => ({
  map: fn => existsPredicate(functor) ? functor.map(fn) : functor,
});
// Do nothing
ifExists(Identity(undefined))
  .map(trace('Nothing with undefined'));
ifExists(Identity(null))
  .map(trace('Nothing with null'));
ifExists(Identity(3))
  .map(double)
  .map(plusOne)
  .map(trace('Double 3 plus one'));


