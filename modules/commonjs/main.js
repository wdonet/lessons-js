
/*
  **** The CommonJS (CJS) format **** 
*/
const lib = require('./lib');
const { one } = require('./lib');

console.log(`Starting main with ${JSON.stringify(lib, false, 2)} and one = ${one}`);