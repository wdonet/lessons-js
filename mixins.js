/**
 * Mixins
 * Functional mixins are composable functions which mix new properties
 * or behaviors with properties from a given object.
 * They are a great way to compose behaviors from multiple source features
 * => (has-a, uses-a, can-do),
 * as opposed to inheriting all the features of a given class
 * => (is-a).
*/

// Example 1
const flying = o => {
  let isFlying = false;
  // The mixin
  return Object.assign(
    {}, // empty object to be mixed
    o, // original object
    {
      fly() {
        isFlying = true;
        return this;
      },
      isFlying: () => isFlying,
      land() {
        isFlying = false;
        return this;
      }
    }
  );
}

const bird = flying({name:'Birdy'});
console.log(`Is flying ${bird.name} ? ${bird.isFlying()}`);
console.log(`now ? ${bird.fly().isFlying()}`);

// Example 2
// Functional mixins can be composed with simple function composition
const quacking = quack => o => Object.assign({}, o, {
  quack: () => quack
});
const quacker = quacking('Quacky!')({});
console.log(quacker.quack());

const createDuck = quack => quacking(quack)(flying({name: 'ducky'}));
const duck = createDuck('Quack! Quack!');
console.log('=>', duck.fly().quack());
console.log('flying? ', duck.fly().isFlying());
console.log('after landing? ', duck.land().isFlying());
console.log('whole enumerable duck properties are:', JSON.stringify(duck));

/**
 * When to Use Functional Mixins
 *  - You should always use the simplest possible abstraction to solve the problem.
 *  - Start with a pure function.
 *  - If you need an object with persistent state, try a factory function.
 *  - If you need to build more complex objects, try functional mixins.
 *  [left to right]
 *  => pure functions > factories > functional mixins > classes
 */