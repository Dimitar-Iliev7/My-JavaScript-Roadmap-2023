// Number() and parseInt() are both functions in JavaScript
// that can be used to convert a string to a number. However,
// there are some differences between the two.

// Number() is a built-in JavaScript function that converts a string to a number,
//  with optional decimal places. It returns NaN (Not a Number)
//  if the string cannot be converted to a number.

let str = "42";
let result = Number(str);
console.log(result); // Output 42

let numOfLegs = 4;
let total = Number(numOfLegs);
console.log(total); // Output 4

let greeting = "Hello";
let final = Number(greeting);
console.log(final); // Output NaN

//////////////////////////////////////
let a = "50";
let b = "50";
let c = "50";

let aToNumber = Number(a);
let bToNumber = Number(b);
let cToNumber = Number(c);

let totalSum = aToNumber + bToNumber + cToNumber;
console.log(totalSum); // Output 150
///////////////////////////////////////////////

let num1 = 20;
let num2 = 20;
let num3 = 20;

let allOfThem = Number(num1 + num2 + num3);
console.log(allOfThem); // Output 60
//////////////////////////////////////////////

let strToNum = "120";
let number = parseInt(strToNum);
console.log(number);

// parseInt() is a built-in JavaScript function that converts a string to an integer number.
//  It can also be used to convert a string to a number with a specified radix (base),
//  which is an optional parameter. If the first character in the string cannot be converted to a number,
//  it returns NaN.

// Here's an example of using parseInt() with a radix:
let string = "1010";
let stringToNumber = parseInt(string, 2);
console.log(stringToNumber); // Output 10
