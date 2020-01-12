// "var"
// is function scoped, otherwise is global

// GLOBAL scope example
a = 4;
console.log('a :: ', a, ', b :: ', b); //a=4 , b=undefined
var a = 5; // hoisting applies here and defines a before ln 5
var b = 10;
console.log('a :: ', a, ', b :: ', b); //a=5, b=10

// var goes farther from the BLOCK scope (it is GLOBAL actually)
var arr = [10,20,30];
for(var index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}
console.log('index still exist here', index);

// FUNCTION or ARROW FUNCTION scope example
function one() {
    console.log('c :: ', c); //c=undefined
    var c = 4;
}

one();
console.log(c); // error : c is not defined
