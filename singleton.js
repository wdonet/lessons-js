/**
 * Singleton
 */

 // TESTER
function tester(singleton, label) {
  console.log(`==== ${label} ====`);
  let instance = singleton.getInstance();
  console.log(instance === singleton.getInstance());
  singleton.instance = {'changed': true};
  console.log(instance === singleton.getInstance());
  instance = singleton.getInstance();
  console.log(instance === singleton.getInstance());
  console.log(JSON.stringify(singleton));
}

// With a function scope
const SingletonCreator = function() {
  let instance;
  this.getInstance = () => instance;
}
tester(new SingletonCreator(), 'function scope');

// With factory function
const singletoner = () => {
  const instance = {};
  const getInstance = () => instance;
  return { getInstance };
}
tester(singletoner(), 'factory function');

// With a Class (need to use #instance for private properties)
class Singleton {
  #instance = {};
  constructor() {
    this.#instance = {isNew: true};
  }
  getInstance() {
    return this.#instance; 
  }
}
tester(new Singleton(), 'class');
