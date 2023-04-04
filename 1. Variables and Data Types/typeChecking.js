// In JavaScript, you can check the type of a variable using the typeof operator.
// The typeof operator returns a string that indicates the data type of the operand.

let num = 50;
let str = "Hello World";
let bool = false;

console.log(typeof num); // Number
console.log(typeof str); // String
console.log(typeof bool); // Boolean

// You can also use the typeof operator to check if a variable is undefined:
let x;
console.log(typeof x); // Undefined

// Note that the typeof operator does not always return the expected result for objects and arrays.
// For example:
let arr = [1, 2, 3];
let obj = { name: "John", age: 30 };

console.log(typeof arr); // output: "object"
console.log(typeof obj); // output: "object"

// In this case, the typeof operator returns "object" for both arr and obj.
// If you need to check if a variable is an array, you can use the Array.isArray() method.
//  If you need to check if a variable is an object,
//   you can use the typeof operator together with a null check:
let arr2 = [1, 2, 3];
let obj2 = { name: "John", age: 30 };

console.log(Array.isArray(arr)); // output: true
console.log(typeof obj === "object" && obj !== null); // output: true
