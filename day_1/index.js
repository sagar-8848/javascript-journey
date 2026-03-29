// ? variable in js

var name = "sagar suwal"; // always avoid this becuase this one is very old
let ages = 20; // if the value will change, then we have to use let
const country = "Nepal"; // use this if value will remain constant

// ### The golden rule:
// ```
// const by default.
// let when you know it will change.
// var → never. (we'll learn why later)

// console.log(name);
// console.log(age);
// console.log(country);

// age = 21;
// console.log(age);

// country = "Netherlands";
// console.log(country);

// * data types in js ( js has 7 primitive data types, )

// 1. String - text
const fullName = "Sagar Suwal";

// 2. Number - integers and decimals both
const age = 20;
const price = 9.99;

// 3. Boolean - only true or false
const isStudent = true;
const isMarried = false;

// 4. Null - intentionally empty
const girlfriend = null; // 😄

// 5. Undefined - declared but not assigned
let score;
console.log(score); // undefined

// 6. Object - collection of key-value pairs
const person = {
  name: "Sagar",
  age: 20,
  country: "Nepal",
};

// 7. Array - list of values (special type of object)
const skills = ["HTML", "CSS", "JavaScript"];

// Log them all
console.log(typeof fullName); // string
console.log(typeof age); // number
console.log(typeof price); // number
console.log(typeof isStudent); // boolean
console.log(typeof girlfriend); // object ← famous JS bug!
console.log(typeof score); // undefined
console.log(typeof person); // object
console.log(typeof skills); // object

// * typeof null returns "object" — this is a famous bug in JS that was never fixed to avoid breaking old websites. null is NOT an object, it's intentionally empty. Just remember this quirk.

// * typeof skills (array) also returns "object" — because arrays ARE objects in JS under the hood.

// STRING + NUMBER
console.log("5" + 1); // "51" ← JS joins them as strings
console.log("5" - 1); // 4   ← JS converts "5" to number
console.log("5" * 2); // 10  ← same, converts to number
console.log("5" + 1 + 2); // "512" ← why?? 🤔
console.log(1 + 2 + "5"); // "35" ← why?? 🤔

// BOOLEAN COERCION
console.log(true + 1); // 2   ← true becomes 1
console.log(false + 1); // 1   ← false becomes 0

// LOOSE vs STRICT equality
console.log(5 == "5"); // true  ← only checks VALUE
console.log(5 === "5"); // false ← checks VALUE + TYPE
console.log(null == undefined); // true
console.log(null === undefined); // false

// * OPERATOR IN JS (There are 3 types of operators in js)

// * 1. Arithmetic
console.log(10 + 3); // 13 - addition
console.log(10 - 3); // 7  - subtraction
console.log(10 * 3); // 30 - multiplication
console.log(10 / 3); // 3.33 - division
console.log(10 % 3); // 1  - remainder (modulus)
console.log(10 ** 3); // 1000 - power (10 cube)

// * COMPARISON

console.log(10 > 3); // true
console.log(10 < 3); // false
console.log(10 >= 10); // true
console.log(10 <= 9); // false
console.log(10 === 10); // true
console.log(10 !== 3); // true

// * LOGICAL

console.log(true && true); // true  - AND (both must be true)
console.log(true && false); // false - AND (one is false)
console.log(true || false); // true  - OR (one is enough)
console.log(false || false); // false - OR (both false)
console.log(!true); // false - NOT (flips it)
console.log(!false); // true  - NOT (flips it)
