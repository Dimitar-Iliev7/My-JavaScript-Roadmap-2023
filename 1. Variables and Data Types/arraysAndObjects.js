// Creating arrays
let myArray = [1, 2, 3, 4, 5];

// You can also create an empty array and add elements to it later:

let myArray1 = [];
myArray1.push(1);
myArray1.push(2);
myArray1.push(3);

// Accessing array elements
let myArray2 = [1, 2, 3, 4, 5];
console.log(myArray2[0]); // output: 1
console.log(myArray2[2]); // output: 3

// You can also change the value of an array element:
let myArray = [1, 2, 3, 4, 5];
myArray[0] = 10;
console.log(myArray); // output: [10, 2, 3, 4, 5]

// Creating objects
let myObject = { name: "John", age: 30, city: "New York" };

// You can also create an empty object and add properties to it later:
let myObject = {};
myObject.name = "John";
myObject.age = 30;
myObject.city = "New York";

// Accessing object properties
// You can access a property in an object using dot notation:
let myObject = { name: "John", age: 30, city: "New York" };
console.log(myObject.name); // output: "John"
console.log(myObject.age); // output: 30

// You can also use square bracket notation to access a property:
let myObject = { name: "John", age: 30, city: "New York" };
console.log(myObject["name"]); // output: "John"
console.log(myObject["age"]); // output: 30

// Changing object properties
let myObject = { name: "John", age: 30, city: "New York" };
myObject.name = "Mike";
console.log(myObject); // output: {name: "Mike", age: 30, city: "New York"}

// Adding and removing object properties
let myObject = { name: "John", age: 30 };
myObject.city = "New York";
console.log(myObject); // output: {name: "John", age: 30, city: "New York"}

// You can remove a property from an object using the delete operator:
let myObject = { name: "John", age: 30, city: "New York" };
delete myObject.age;
console.log(myObject); // output: {name: "John", city: "New York"}
