// "let" & "const"
// are block scoped
// const points to a space in memory that must not change
// let allows to change the pointer

const arr = [10,20,30];
// arr = []; // ERR: Assignment to constant variable not allowed
arr.push(40); // arr original definition is still Array

let index = 'index';
for(let index = 0; index < arr.length; index++) { // inside the for loop, index is a new reserved space in memory for numeric values
    console.log(`arr[${index}] = ${arr[index]}`);
}
console.log('index value:', index); // prints 'index' bc index was defined at global scope

function internal() {
    console.log('Value used at internal():', inside);
}
let inside = 10;
internal(); // it works bc 'inside' is defined before using it in 'internal()'

const sum = function(a,b) {
    return a + b;
}
console.log(`1 + 2 = ${sum(1,2)}`);
// sum = () => {}; // ERR: Assignment to constant variable not allowed
let resum = sum;
console.log('resum:', resum); // resum points to sum constant value
resum = 'any String';
console.log('resum:', resum); // resum points now to a string
console.log('sum:', sum); // sum still is the same

// globalVar = 'any Value';  // ERR: globalVar is not defined - hoisting does not apply with let
let globalVar = 'other';
console.log('globalVar:', globalVar);
// let globalVar = 'differentValue'; // ERR: Identifier 'globalVar' has already been declared
