//In JavaScript, null and undefined are two distinct values that represent the absence of a value.

// undefined is a primitive value that is automatically assigned to variables
//  that have been declared but not yet initialized, function parameters
//  that have not been provided with a value, and to the return value of a function
//  that does not explicitly return anything.

// For example:
let a;
console.log(a); // output undefined

function test(b) {
  console.log(b); // output indefined
}
test();

// null, on the other hand, is a value that represents the intentional absence
//  of any object value. It is often used as an explicit value to indicate
//  that a variable should have no value or that an object property should have no value.

// For example:
let c = null;
console.log(c);
