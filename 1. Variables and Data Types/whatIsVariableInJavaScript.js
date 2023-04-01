// 4 Ways to Declare a JavaScript Variable:
// Using var
// Using let
// Using const
// Using nothing

// What are Variables?
// Variables are containers for storing data (storing data values)

// In this example, x , y, and z, are variables, declared with the var keyword:

var x = 5;
var y = 6;
var z = x + y;
var name = "John";

// In this example, x, y, and z, are variables, declared with the let keyword:

let x = 50;
let y = 200;
let z = y * x;
let age = 50;
let dogName = "Rex";

// When to Use JavaScript const?
// If you want a general rule: always declare variables with const.
// If you think the value of the variable can change, use let.
// In this example, price1, price2, and total, are variables:

const price1 = 50;
const price2 = price1 * 2;
const total = price2 * 100;
console.log(total);

// Value = undefined
// A variable declared without a value will have the value undefined.
// The variable amount will have the value undefined after the execution of this statement:

let amount;
