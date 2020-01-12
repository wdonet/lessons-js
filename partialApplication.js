/** Partial Application
 * In other words, a function that takes a function with multiple parameters and returns a function with fewer parameters.
 * Ref: https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983
 * */
console.log('+-+-+-+-+-+-+-+-+- PARTIAL APPLICATION +-+-+-+-+-+-+-+-+-');
const sumUp = (a,b,c) => a+b+c;

 console.log('===== ADD ======');
 const add2 = sumUp.bind(this, 2);
 console.log(`Add2 : ${add2(5,5)}`);
 const add10 = add2.bind(this, 8);
 console.log(`Add10 : ${add10(5)}`);
 const get20 = add10.bind(null, 10);  // 'this' is not important for this example
 console.log(`get20 : ${get20()}`);
 
 //OR
 console.log('===== SUM ======');
 const sum2 = (a,b) => sumUp(a,b,2);
 console.log(`Sum2 : ${sum2(5,5)}`);
 const sum10 = (a) => sum2(a,8);
 console.log(`Sum10 : ${sum10(5)}`);
 const sumTo20 = () => sum10(10);
 console.log(`get20 : ${sumTo20()}`);
 