// * array in js

// const fruits = ["apple", "banana", "mango"];
// ADD to end
// fruits.push("orange");
// console.log(fruits); // ["apple", "banana", "mango", "orange"]

// REMOVE from end
// fruits.pop();
// console.log(fruits); // ["apple", "banana", "mango"]

// ADD to beginning
// fruits.unshift("grape");
// console.log(fruits); // ["grape", "apple", "banana", "mango"]

// REMOVE from beginning
// fruits.shift();
// console.log(fruits); // ["apple", "banana", "mango"]

// FIND index of an item
// console.log(fruits.indexOf("banana")); // 1

// CHECK if item exists
// console.log(fruits.includes("mango")); // true

// LENGTH of array
// console.log(fruits.length); // 3

// ? array methods

// push()     → add to END
// pop()      → remove from END
// unshift()  → add to BEGINNING
// shift()    → remove from BEGINNING
// indexOf()  → find position
// includes() → check if exists
// length     → count items

// ? array methods in js

// ? map -> new array return garxa hai
// const numbers = [1, 2, 3, 4, 5];

// const newNums = numbers.map((curelem) => {
//   return curelem * 2;
// });

// console.log(newNums);

// // ? filter -> if value are true based on conditions, it returns true;

// const filteredData = numbers.filter((curOne) => {
//   return curOne > 3;
// });
// console.log(filteredData);

// ? reduce

// const reducedOne = numbers.reduce((init, curOne) => {
//   return init + curOne;
// }, 0);
// console.log(reducedOne);

// ### 🧠 When to use which:
// ```
// forEach  →  when you just want to loop and DO something
// map      →  when you want to TRANSFORM and get new array
// filter   →  when you want to FILTER and get new array
// reduce   →  when you want ONE value from the whole array
// ```

// ### Simple rule:
// ```
// Need a new array?  → map or filter
// Need one value?    → reduce
// Just looping?      → forEach

// const citites = ["kathmandu", "birjung", "bhaktapur", "lalitpur", "gorkha"];

// console.log(citites.push("pokhara"));
// citites.shift();
// console.log(citites);

// console.log(citites.includes("kathmandu"));
// console.log(citites.indexOf("biratnagar"));
// console.log(citites.length);

// ?  use the map to create a new array with all city names in upper case.

// const upperCased = citites.map((curOne) => {
//   return curOne.toUpperCase();
// });
// console.log(upperCased);

// ? use filter to keep only cities whose names has longer then 7 characters

// const filteredCities = citites.filter((curElem) => {
//   return curElem.length > 7;
// });
// console.log(filteredCities);

// ? use for each to display all the cities name like city: kathmandu, city: pokhara

// citites.forEach((curCity) => {
//   console.log(`city: ${curCity}`);
// });

// * objects in js

// const person = {
//   name: "Sagar",
//   age: 20,
//   country: "Nepal",
//   skills: ["HTML", "CSS", "JavaScript"],
//   address: {
//     city: "Kathmandu",
//     zipCode: 44600,
//   },
// };

// // TWO ways to access properties
// console.log(person.name); // dot notation
// console.log(person["name"]); // bracket notation

// // NESTED object
// console.log(person.address.city); // Kathmandu

// // NESTED array inside object
// console.log(person.skills[0]); // HTML

// // ADD new property
// person.email = "sagar@gmail.com";
// console.log(person.email);

// // UPDATE property
// person.age = 21;
// console.log(person.age);

// // DELETE property
// delete person.country;
// console.log(person.country); // undefined

// ?  when to use bracket notationa and dot notation

// ```
// // 1. When property name has spaces or special characters
// person["first name"]   // ✅ works
// person.first name      // ❌ breaks

// // 2. When property name is stored in a VARIABLE
// const key = "name";
// console.log(person[key]);    // ✅ Sagar
// console.log(person.key);     // ❌ undefined (looks for property called "key")

// ### 🧠 Simple rule:
// Normal property?         → always use dot notation
// Property in a variable?  → use bracket notation
// Property has spaces?     → use bracket notation

// ```

// ```
// Object.keys()     → gives you all the KEYS as array
// Object.values()   → gives you all the VALUES as array
// Object.entries()  → gives you KEY+VALUE pairs as array of arrays

// ```

// ```
// 1. Create an object for a phone with these properties:

// brand, model, price, inStock (boolean)
// specs (nested object with ram and storage)
// colors (array of available colors)

// 2. Do these operations:

// Log brand and model using dot notation
// Log ram using nested dot notation
// Log second color using array index
// Add a new property warranty: 2
// Update price to a new value
// Delete inStock
// Log the entire object at the end

// ```
// const phone = {
//   brand: "samsung",
//   model: "s24",
//   price: 125000,
//   inStock: true,
//   specs: {
//     RAM: "16GB",
//     ROM: "1TB",
//     colors: ["black", "red", "white", "blue"],
//   },
// };

// console.log(`The brand of the phone is ${phone.brand} and model is ${phone.model}`);
// console.log(phone.specs.RAM);
// console.log(phone.specs.colors[1]);
// phone.warranty = 2;
// phone.price = 150000;
// delete phone.inStock;
// console.log(phone);

// console.log(Object.keys(phone));
// console.log(Object.values(phone));
// console.log(Object.entries(phone));

// for (const [key, value] of Object.entries(phone)) {
//   console.log(`${key}: ${value}`);
// }

// const fruits = ["apple", "banana", "cherry", "mango"];
// const moreFruits = ["kiwi", "pineapple"];

// ? Combining an Array

// const combinedFruits = [...fruits, ...moreFruits];
// console.log(combinedFruits);

// ? Copying an Array

// const copy = [...fruits];

// fruits.push('pineapple');
// console.log(copy);
// console.log(fruits);

// SHALLOW COPY - works fine for simple arrays
// const fruits = ["apple", "banana", "mango"];
// const fruitsCopy = [...fruits];
// fruitsCopy.push("kiwi");

// ? there is no any problem like shallow or deep copy
// console.log(fruits);      // unchanged ✅
// console.log(fruitsCopy);  // has kiwi ✅

// SHALLOW COPY - PROBLEM with nested objects
// const students = [
//   { name: "Ram", marks: 90 },
//   { name: "Shyam", marks: 80 }
// ];

// const studentsCopy = [...students];
// studentsCopy[0].marks = 999; // change copy

// console.log(students[0].marks);      // 999 😱 original changed!
// console.log(studentsCopy[0].marks);  // 999

// const students = [
//   { name: "Ram", marks: 90 },
//   { name: "Shyam", marks: 80 },
// ];

// ❌ SHALLOW COPY - nested objects still linked
// const shallowCopy = [...students];
// shallowCopy[0].marks = 999;
// console.log(students[0].marks); // 999 😱 original changed!

// ✅ DEEP COPY - completely independent

// const deepCopy = JSON.parse(JSON.stringify(students));
// deepCopy[0].marks = 999;
// console.log(students[0].marks); // 90 ✅ original safe!
// console.log(deepCopy[0].marks); // 999 ✅ only copy changed!

// ? when to use what

// ```
// Simple array of strings/numbers → shallow copy is fine
// Array of objects / nested data  → always deep copy!
// ```\

// ? practise task

// const employe = [
//   {
//     name: "Ram Bahadur",
//     salary: 20000,
//     departmant: "sales",
//   },
//   {
//     name: "Random Man",
//     salary: 2900,
//     departmant: "sales",
//   },
//   {
//     name: "Sagar Suwal",
//     salary: 10000,
//     departmant: "sales",
//   },
// ];

// const shallowCopy = [...employe];

// shallowCopy[0].salary = 1599;

// console.log(employe);
// console.log(shallowCopy);

// const deepOne = structuredClone(employe); // just learned from the reels. i knwo the json.stringify one as well mate

// deepOne[0].salary = 999;
// console.log(employe);

// console.log(deepOne);

// ? now at the deepCopy, the original one is not changing while the copy one is being changed

// * Array Destructuring in Javascript

// const fruits = ["apple", "banana", "mango", "orange"];

// ❌ OLD WAY - ugly and repetitive
// const first = fruits[0];
// const second = fruits[1];
// const third = fruits[2];

// ✅ DESTRUCTURING - clean and modern
// const [a, b, c] = fruits;
// console.log(a); // apple
// console.log(b); // banana
// console.log(c); // mango

// SKIP elements using commas
// const [x, , z] = fruits;
// console.log(x); // apple
// console.log(z); // mango (skipped banana!)

// REST operator - grab the rest
// const [head, ...tail] = fruits;
// console.log(head); // apple
// console.log(tail); // ["banana", "mango", "orange"]

// DEFAULT values
// const [p, q, r, s, t = "grape"] = fruits;
// console.log(t); // grape (didn't exist so used default!)

// ? practise task

// const colors = ["red", "blue", "green", "yellow", "black", "purple"];

// ? destructure (get the first three colors only)

// const [a, b, c, d, e, f, last = "white"] = colors;
// console.log(`First one ${a}`);
// console.log(`Second one : ${b}`);
// console.log(`Third One : ${c}`);

// ? get the first and the third color, skip the second one
// const [s, , t] = colors;

// console.log(`first one ${s}, second skipped, Third one: ${t}`);

// ? get first colors as primary and rest as secondary

// const [x, ...y] = colors;
// console.log(`Primary ${x}`);
// console.log(`Secondary : ${structuredClone(y)}`);

// console.log(`$Default : ${last}`);

// ? Destructuring the objects

// const person = {
//   name: "Sagar",
//   age: 20
// };

// // COPYING an object
// const personCopy = { ...person };
// personCopy.age = 99;
// console.log(person.age);     // 20 - original safe!
// console.log(personCopy.age); // 99 - only copy changed!

// // MERGING two objects
// const job = {
//   role: "Developer",
//   company: "Bajra Technologies"
// };

// const fullProfile = { ...person, ...job };
// console.log(fullProfile);

// // OVERRIDING properties
// const updated = { ...person, age: 25 };
// console.log(updated);
// console.log(person);

// * practise set for Objects Copying

// const laptop = {
//   brand: 'dell',
//   price: 70000,
//   specs : {
//     ram : 8,
//     rom : 256
//   }
// }

// const spreadOp = {...laptop}
// spreadOp.price = 50000;

// console.log(laptop);
// console.log(spreadOp); // no probelm while we are not chaning the nested one

// spreadOp.specs.ram = 16;

// console.log(spreadOp);
// console.log(laptop); // org changed here

// // ? now fixing the problem

// const deepCopy = structuredClone(laptop)
// deepCopy.specs.ram = 32;
// console.log(deepCopy);
// console.log(laptop); // now it's safe

// ? Object destructuring in js

// const person = {
//   name: "Sagar",
//   age: 20,
//   country: "Nepal",
//   job: "Developer",
// };

// // ❌ OLD WAY
// // const name = person.name;
// // const age = person.age;

// // ✅ DESTRUCTURING
// const { name, age, country } = person;
// console.log(name); // Sagar
// console.log(age); // 20
// console.log(country); // Nepal

// // RENAMING while destructuring
// const { name: fullName, age: years } = person;
// console.log(fullName); // Sagar
// console.log(years); // 20

// // DEFAULT values
// const { job, salary = 50000 } = person;
// console.log(job); // Developer
// console.log(salary); // 50000 (doesn't exist so uses default!)

// // NESTED object destructuring
// const student = {
//   name: "Ram",
//   address: {
//     city: "Kathmandu",
//     zip: 44600,
//   },
// };

// const {
//   name: studentName,
//   address: { city, zip },
// } = student;
// console.log(studentName); // Ram
// console.log(city); // Kathmandu
// console.log(zip); // 44600

// ```
// const { name, age } = obj           // basic destructuring
// const { name: fullName } = obj      // rename
// const { salary = 50000 } = obj      // default value
// const { address: { city } } = obj   // nested destructuring
// ```

// ? practise task - object destructuring

// const movie = {
//   title: "xyz movie",
//   year: 2026,
//   rating: 6,
//   director: "sagar suwal",
//   details: {
//     genre: "frictional",
//     duration: 120,
//   },
//   cast : ['ram','hari', 'sala']
// };

// // ? destructrue title and year normally

// const { title, year } = movie;

// console.log(`Movie Title : ${title}`);
// console.log(`Movie Year: ${year}`);

// const {rating : imdbRating} = movie;
// console.log(`Rating : ${imdbRating}`);

// const {details : {genre}} = movie;
// console.log(`Genre : ${genre}`);

// const {budget = 'unknown'} = movie;
// console.log(`Budget : ${budget}`);

// const {cast} = movie;
// console.log(`Cast First Actor : ${cast[0]}`);

// * optinal chaining in js

// const user = {
//   name: "Sagar",
//   address: {
//     city: "Kathmandu"
//   }
// };

// // ❌ WITHOUT optional chaining
// // console.log(user.phone.number); // TypeError: Cannot read properties of undefined!

// // ✅ WITH optional chaining
// console.log(user?.phone?.number); // undefined (no error!)

// // REAL WORLD example - some users have job, some don't
// const user1 = { name: "Sagar", job: { company: "Bajra", salary: 50000 } };
// const user2 = { name: "Ram" }; // no job yet!

// console.log(user1?.job?.company); // Bajra
// console.log(user2?.job?.company); // undefined (no error!)

// // WITH arrays
// const data = {
//   users: ["Sagar", "Ram", "Hari"]
// };

// console.log(data?.users?.[0]);   // Sagar
// console.log(data?.posts?.[0]);   // undefined (posts doesn't exist!)

const users = [
  { name: "user1", age: 20, address: { city: "kathmandu", zip: 44600 }, phone: 9777 },
  { name: "user2", age: 20 },
  { name: "user", age: 20, address: { city: "hetauda", zip: 400 } },
];


users.forEach((curUser)=> {
  console.log(`Name : ${curUser?.name} |  Age: ${curUser?.age } |City : ${curUser?.address?.city} | Phone : ${curUser?.phone}`);
})
