/*
 **** The ES Module (ESM) format. *****
As of ES6 (ES2015), JavaScript supports a native module format.
- It uses an export keyword to export a module’s public API and an import keyword to import it.
- Everything inside an ES6 module is private by default, and runs in strict mode (https://www.geeksforgeeks.org/strict-mode-javascript/)
- ES6 modules are behind a flag in Node.js 9.8.0+ and will not be fully implemented until at least version 10
*/
export let one = 60;
export const TWO = 99;
export const log = console.log;

export default {
    test1: 'this is a test',
    four: function () {return 4;},
    five: () => 5
};

console.log('module here \n=======\n');