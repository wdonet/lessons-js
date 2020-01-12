 /** Currying
 * when a function, instead of taking all arguments at once,
 * 1. takes the first one and return a new function that takes the second one
 * 2. and returns a new function which takes the third one, and so forth,
 * 3. until all arguments have been fulfilled
 * 
 * In other words:
 * A function that takes a function with multiple parameters as input and returns a function with exactly one parameter.
 * - Turn a function call add(1,2,3) into add(1)(2)(3)
 * Ref: https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983
 * **/
console.log('+-+-+-+-+-+-+-+-+- CURRYING +-+-+-+-+-+-+-+-+-');
const currySum = a => b => c => a+b+c;
const one = currySum(1); // returns a fn
const three = one(2); // returns a fn
const six = three(3); // returns the sum
console.log('one:', one, 'three:', three, 'six:', six, '\ncurrySum:', currySum(5)(5)(5));

/**
 * Point-free style
 * It is a way of defining a function without reference to its arguments.
 * Generally, a point-free function is created by calling a function which returns a function, such as a curried function.
 */
console.log('+-+-+-+-+-+- Compose +-+-+-+-+-+-');
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const add1 = n => n + 1;
const double = n => n * 2;
const trace = label => value => {
  console.log(`## [${label}] => ${value}`);
  return value;
}
const composed = compose(
  trace('after duplicate'),
  double,
  trace('after adding 1'),
  add1
);
console.log(`1. => ${composed(1)}`);
console.log(`2. => ${composed(20)}`);

console.log('+-+-+-+-+-+- Pipe +-+-+-+-+-+-');
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
const piped = pipe(
  add1,
  trace('after adding 1'),
  double,
  trace('after duplicate')
);
console.log(`3. => ${piped(1)}`);
console.log(`4. => ${piped(20)}`);
