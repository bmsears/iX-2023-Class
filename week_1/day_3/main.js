console.log("Hello World");

// Variables

// var - ignore

// let -can be reasinged
let a = 0;
console.log(a);
a = 10;
console.log(a);
a = "Hello";
console.log(a);

// cont -constant variable, cannot be reassigned
const myName = "John";
console.log(myName);

// Data Types in JS

// Primatives
// Storedn in a location on the stack

// string
// console.log(typeof myName);

// number
// boolean
// null (intentionally empty)
// undefined (unassigned)

// Reference Types
// Dynamicaly allocated to the memory
// A pointer to a location in memory

// arrays
// objects
// literals
// anything else (pretty much)

// String methods and Concatenations

const firstName = "John";
const lastName = "Doe";
const age = 30;
const greeting = "Hello my name is John";
const tags = "web design, web development, programming";

let fullName = firstName + " " + lastName;
console.log(fullName);

let myGreeting = `${greeting} my full name is ${fullName} and I am ${age} years old`;
console.log(myGreeting);

// Appending
let val;
console.log(val);
val = "john";
console.log(val);
// val = val + ' doe';
val += " doe";
console.log(val);

//ToUpperCase
let city = "miami";
console.log(city);
city = city.toUpperCase();
console.log(city);

//ToLowerCase
let state = "FLORIDA";
console.log(state);
state = state.toLowerCase();
console.log(state);

// Character at an index in a string
let char = state.charAt(3);
console.log(char);

// GET A SUBSTRING FROM A LARGER STRING
let longWord = "supercalifragilisticexpialidocious";
console.log(longWord.substring(0, 5));
console.log(longWord.substring(5, 10));
console.log(longWord.substring(10));

// Slice a string
console.log(longWord.slice(0, 5));
console.log(longWord.slice(5));
console.log(longWord.slice(-5));

// includes()
// returns true or false
// we can use this as a check statement (if statement)
console.log(longWord.includes("frag"));

// Template Literals
const firstName2 = "John";
const lastName2 = "Doe";
const age2 = 30;
const greeting2 = "Hello my name is John";
const tags2 = "web design, web development, programming";

let html;

html = `
    <ul>
        <li> First name: ${lastName2}</li>
        <li> Last name: ${lastName2}</li>
        <li> Age: ${age2}</li>
    </ul>
`;

document.body.innerHTML = html;

// Math Object
// It has methods attached to it

//Euler number
console.log(Math.E);
console.log(Math.sqrt(9));

// Comparative Operators
// Equal to
// Greater than
// Greater than or equal to
// Less than
// Less than

// Logical Operators
// If else

// Truthy and Falsey checks

let item = null;
// 0 is a Falsey value
// Numbers larger than or smaller than 0 are truthy
item = 10;

if (item) {
  console.log("Truthy");
} else {
  console.log("Falsey");
}

item = -10;

if (item) {
  // -10 is truthy
  console.log("Truthy");
} else {
  // 0 is falsey
  console.log("Falsey");
}

// can control the truthy and falsey values
if (item > 5 || item < -5) {
  console.log("Truthy");
} else {
  console.log("Falsey");
}

// ==
// check for value equality
// ===
// check for value and type equality
item = 6;

let newItem = "hello";
if (item > 5 && newItem === "hello") {
  console.log("dope");
} else {
  console.log("cool");
}

// Ternary Operator
// in line if statement

let number = 100;
console.log(number === 100 ? "Correct" : "Incorrect");

let color = "yellow";

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  case "green":
    console.log("Color is green");
    break;
  default:
    console.log("Color is not red, blue, or green");
    break;
}

// Arrays

let names = ["John", "Jane", "Jack", "Jill"];
console.log(names);
console.log(names[0]);
console.log(names[1]);

// add to the array
names.push("James");
console.log(names);

// pop items off the array
names.pop("James");
console.log(names);

// Higher order functions

// filter
let newArr1 = names.forEach((x) => {
  return x !== "Jack";
});
console.log(newArr1);

let newArr2 = names.filter((x) => x !== "Jack");
console.log(newArr2);

let newArr3 = names.filter((x) => x === "Jack");
console.log(newArr3);

let nameFound = names.find((x) => x === "Jack");
console.log(nameFound);

let indexFound = names.findIndex((x) => x === "Jack");
console.log(indexFound);
console.log(names[indexFound]);

// Objects

let person = {
  name: "John",
  age: 30,
  surname: "Doe",
  phoneType: "iPhone",
  getPhoneType: function () {
    return this.phoneType;
  },
};

// Get all the keys for this object
console.log(Object.keys(person));
const keys = Object.keys(person);

console.log(person);
console.log(person["name"]);
console.log(person["surname"]);
console.log(person["phoneType"]);
// does not execute the function

console.log(person.getPhoneType());
console.log(person.getPhoneType);

// Combine a few thing here
// Arrays, Objects and higher oreder functions

let randomObjectArray = [
  {
    name: "John",
    surname: "Doe",
    goalsScored: 10,
  },
  {
    name: "Jane",
    surname: "Doe",
    goalsScored: 20,
  },
  {
    name: "Jack",
    surname: "Doe",
    goalsScored: 30,
  },
];

let newRandomObjectArray = randomObjectArray.map((x) => {
  return {
    name: x.name,
    surname: x.surname,
    goalsScored: x.goalsScored,
  };
});

console.log(newRandomObjectArray);

// Looping

// For loop
let distance = 10;
for (let i = 0; i < distance; i++) {
  // execute code
  console.log("our index value is" + i);
}

// sheep example
for (let i = 0; i < 10; i++) {
  console.log(`Sheep number: ${i + 1}`);
}

// While loop
let newValue = 0;
while (newValue < 10) {
  console.log(`While loop ` + newValue);
  newValue++;
}

// Functions

function greetMe(name) {
  console.log(`Hello ${name}`);
}

greetMe("John");

// rule of thumb
// you should accept a max of 3 function paramters
// else rather accept an object

function addTwoNumbers(num1, num2) {}
function addFiveNumbers(num1, num2, num3, num4, num5) {}

// let nums = {
// num1: 1,
// num2: 2,
// num3: 3,
// num4: 4,
// num5: 5,
//};

function addFiveNumbers(nums) {
  let total = nums[0] + nums[1] + nums[2] + nums[3] + nums[4];
  console.log("Total is: " + total);
}

addFiveNumbers(2, 5, 8, 23, 78);

function getSlices(breadName) {
  if (breadName == null || breadName === "") {
    console.log("Please enter a bread name");
    return;
  }

  switch (breadName) {
    case "white":
      console.log("White sells loafs with 30 slices");
      break;
    case "brown":
      console.log("Brown sells loafs with 20 slices");
      break;
    case "wholewheat":
      console.log("Wholewheat sells loafs with 15 slices");
      break;
    default:
      console.log("We do not sell that type of bread");
      break;
  }
}

getSlices();

let todaysDate = new Date();
console.log(todaysDate);

let day = todaysDate.getDate();
console.log(day);

// get month return the month but and index behind
let month = todaysDate.getMonth() + 1;
console.log(month);

let year = todaysDate.getFullYear();
console.log(year);

console.log(`${day}/${month}/${year}`);
