/* ****** CommonJS Format ******
- It is used in Node.js and uses require and module.exports to define dependencies and modules.
- Modules are loaded synchronously and processed in the order they occur.
*/

// Option 1: export by property
exports.one = 60;
exports.TWO = 99;
module.exports.test = 'this is a test lib';

// Option 2: export all properties at once
// module.exports = {
//     one: 60,
//     TWO: 99,
//     test: 'this is a test lib'
// }

console.log('module ==>', module, '\n=======\n');