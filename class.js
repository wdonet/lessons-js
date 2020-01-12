'use strict';

/** With a normal function */
function fn() {
  this.name = 'fn';
  this.method = function () {
    return 'I am a normal function!';
  }
}
const fnInstance = new fn();
console.log('=> FN type:', typeof fnInstance,
  '\n content:', JSON.stringify(fnInstance),
  '\n prototype:', fnInstance.__proto__,
  '\n executed:', JSON.stringify(fnInstance.method()));


/** With anonymous function */
const anonFn = function () {
  this.name = 'anonymous';
  this.method = function() {
    return 'I am anonymous';
  }
}
const anonFnInstance = new anonFn();
console.log('=> ANONYMOUS fn type:', typeof anonFnInstance,
  '\n content:', JSON.stringify(anonFnInstance),
  '\n prototype:', anonFnInstance.__proto__,
  '\n executed:', JSON.stringify(anonFnInstance.method()));

/** With a class */
// - Classes are only syntactical sugar for constructor functions

class aClass {
  constructor(name) {
    this.name = name;
  }
  method() {
    return 'I am a class!';
  };
}
const classInstance = new aClass('class');
console.log('=> CLASS  type:', typeof classInstance,
  '\n content:', JSON.stringify(classInstance),
  '\n prototype:', classInstance.__proto__,
  '\n executed:', JSON.stringify(classInstance.method()));

class subClass extends aClass {
  constructor(name) {
    super(name);
  }
  sub_method() {
    return 'I am a subclass from class';
  }
}
const subClassInstance = new subClass('subclass');
console.log('=> SUB CLASS type:', typeof subClassInstance,
  '\n content:', JSON.stringify(subClassInstance),
  '\n prototype:', subClassInstance.__proto__,
  '\n method:', JSON.stringify(subClassInstance.method()),
  '\n sub-method:', JSON.stringify(subClassInstance.sub_method()));

