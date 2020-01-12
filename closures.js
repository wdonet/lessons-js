
/** Closures **/

/**
 * Example 1
 * - privateContext is in charge o holding the privacy and only get and set are exposed
 * - get & set are the closures
 *  **/



const privateContext = (data) => {
  const get = () => {
    return data;
  }
  const set = (newData) => {
    Object.assign(data, newData)
  }
  return {
    get,
    set
  }
}

const { get, set } = privateContext({one:1, two:2});
console.log(`Original values one: ${get().one} two: ${get().two}`);
set({four:4});
const { four } = get();
console.log(`New value for: ${four}`);


/**
 * Example 2
 * **/

 const add = (a, b) => a + b;

 const partiallyApply = (fn, ...fixedArgs) => {
   return (...remainingArgs) => {
       return fn.apply(this, fixedArgs.concat(remainingArgs));
    }
 }
 const add10 = partiallyApply(add, 10);
 console.log(`add 10 to 5 = ${add10(5)}`);
 
 const sumUp = (...numbers) => numbers.reduce((pv, acc) => pv + acc, 0);
 console.log(`sum up 1,2,3 = ${sumUp(1,2,3)}`);
 const sumUpWith123 = partiallyApply(sumUp, 1,2,3);
 console.log(`and double that ^ = ${sumUpWith123(1,2,3)}`);
