
/*
 **** The ES Module (ESM) format. *****
 - Need Node +v10 (files need .mjs extension)
 - Run it as: $ node --experimental-modules main.mjs   
*/
import lib from './lib.mjs';
import { one, TWO, log } from './lib.mjs';

console.log('==> Starting main <==');
log(`All lib : ${JSON.stringify(lib, false, 2)}
 and one = ${one}
 and TWO = ${TWO}
 and log = ${log}`);
 log(`four: ${lib.four()}`)
 log(`five: ${lib.five()}`)