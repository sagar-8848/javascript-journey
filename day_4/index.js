// ? Higher order functions

// ? function without default value
// function greet(name){
//   console.log("hello sir", name);
// }

// greet("sagar")

// ? function with default value
// function greet(name = "Stranger"){
//   console.log("hello sir", name);
// }

// greet()

// ? it works on arrow fucntions too

// const calc = (a, b = 2) => {
//   console.log(a * b);

// }

// calc(5)

// ``` // ? task
// 🔨 Quick Practice — Default Parameters

// Write this yourself:
// Create a function createProfile that takes:

// name (required)
// role (default: "Developer")
// country (default: "Nepal")

// Log like:
// Name: Sagar | Role: Developer | Country: Nepal
// Call it 3 times:

// With all 3 arguments
// With only name and role
// With only name

// ```

// function createProfile(name, role = "developer", country = "Nepal") {
//   console.log(`Name: ${name} | Role: ${role} | Country : ${country}`);
// }

// createProfile("Sagar", "fronted dev", "new zealand");
// createProfile("Sagar", "backend dev");
// createProfile("Sagar");

// ? PART 2 - > REST OPERATOR (Rest operator lets a function accept any number of arguments!)

// WITHOUT rest - fixed arguments
// function add(a, b, c) {
//   return a + b + c;
// }

// ✅ WITH rest - unlimited arguments
// function addAll(...numbers) {
//   console.log(numbers); // it's just an array!
//   return numbers.reduce((sum, num) => sum + num, 0);
// }

// console.log(addAll(1, 2, 3));        // 6
// console.log(addAll(1, 2, 3, 4, 5)); // 15
// console.log(addAll(10, 20));         // 30

// MIXING normal + rest
// function introduce(greeting, ...names) {
//   names.forEach(name => console.log(`${greeting} ${name}!`));
// }

// introduce("Hello", "Sagar", "Ram", "Hari");

// ```
// ? 🧠 Key thing to notice:
// ...rest    →  always becomes an ARRAY inside the function
// ...spread  →  expands an array into individual items
// ```

// ? quick practise rest operator

// * **1. Create a function `getHighest` that takes any number of scores and returns the highest one**

// function getHighest(...allNums) {

//   // ? this is the manual method
// //  let highest = allNums[0];
// //  for(let i = 1; i < allNums.length; i++){
// //   if(allNums[i] > highest){
// //     highest = allNums[i]
// //   }

// // }
// // console.log(highest);

// ? another we have built in method that is Math.max()

// return Math.max(...allNums)
// }

// console.log(getHighest(10, 20, 30, 50, 60));

// *

// function fullName(first, ...others) {
//   console.log(`First : ${first}`);
//   console.log(`Others : `, others);
// }

// fullName("sagar", "kumar", "suwal");

// * things to remeber

// console.log(`${array}`)     →  joins with comma (loses array format)
// console.log("label", array) →  shows proper array with brackets!

// ? 📦 Part 3 — Higher Order Functions (HOF)  --> A Higher Order Function is simply a function that:

// ? higher order function

// HOF - function taking a function
// function doMath(a, b, operation) {
//   return operation(a, b);
// }

// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;

// console.log(doMath(5, 3, add));
// console.log(doMath(5, 3, multiply));

// // HOF - function returning a function
// function multiplier(factor) {
//   return (number) => number * factor;
// }

// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(5));
// console.log(triple(5));

// function calculate(x, y, op) {
//   return op(x, y);
// }

// const add = (x, y) => x + y;
// const sub = (x, y) => x - y;
// const divide = (x, y) => x / y;
// const multiply = (x, y) => x * y;

// console.log(calculate(10, 5, add));
// console.log(calculate(10, 5, sub));
// console.log(calculate(10, 5, divide));
// console.log(calculate(10, 5, multiply));

// ? create a function that powerOf that returns a function just like mulitplier

// function powerOf(power) {
//   return (num) => num ** power;
// }

// const double = powerOf(2);
// const triple = powerOf(3);

// console.log(double(10));
// console.log(triple(10));

// ? another approach with normal or traditioal function
// function powOf(power){
//   return function(number){
//     return number ** power;
//   }
// }

// const dbl = powOf(2);
// const trpl = powOf(3);
// const fourX = powerOf(4);

// console.log(dbl(5));
// console.log(trpl(5));
// console.log(fourX(5));

// ? Call back function

// SIMPLE callback
// function greet(name, callback) {
//   console.log(`Hello ${name}!`);
//   callback(); // calling the function that was passed!
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// greet("Sagar", sayBye);
// Hello Sagar!
// Goodbye!

// * CALLBACK with arguments
// function processUser(name, age, callback) {
//   const user = { name, age };
//   callback(user);
// }

// processUser("Sagar", 20, (user) => {
//   console.log(`User created: ${user.name}, Age: ${user.age}`);
// });

// // REAL WORLD - setTimeout (built in callback!)
// console.log("Start");

// setTimeout(() => {
//   console.log("I ran after 2 seconds!");
// }, 2000);

// console.log("End");
// 1. Create a function calculate that takes 2 numbers and a callback — the callback receives the result:

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }
// function div(a, b) {
//   return a / b;
// }
// function mul(a, b) {
//   return a * b;
// }

// function calc(a, b, callback) {
//   const res = callback(a, b);
//   console.log(`The result is ${res}`);
// }
// calc(10, 20, add);
// calc(20, 30, sub)
// calc(20, 30, div )
// calc(20, 30, mul)

// const fetchUser = (id, callback) => {
//   console.log("Fetching user...");

//   setTimeout(() => {
//     var user = { id: id, name: "Sagar", country: "Nepal" };
//     callback(user); // pass user to callback after 1 second!
//   }, 1000);
// };

// fetchUser(1, (user) => {
//   console.log("Fetched: " + user.name);
//   console.log("Country: " + user.country);
// });

// * 📦 Part 5 — Closures
// * A closure is when a function remembers variables from its parent scope even after the parent function has finished running!

// * STEP 1 - normal function (no closure)
// function outer() {
//   var message = "Hello Sagar!";

//   function inner() {
//     console.log(message); // inner can access outer's variable!
//   }

//   inner();
// }

// outer();

// * STEP 2 - REAL closure (inner function RETURNED!)
// function outer() {
//   var message = "Hello Sagar!";

//   function inner() {
//     console.log(message);
//   }

//   return inner; // returning the function, not calling it!
// }

// const myFunc = outer(); // outer runs and FINISHES here
// myFunc(); // but inner still remembers message!

// ? every counter has it's own memory remembered for eg: the increment and the increment 2

// function counter() {
//   var count = 0; // private variable!

//   return function() {
//     count++;
//     console.log("Count: " + count);
//   }
// }

// const increment = counter();
// increment(); // Count: 1
// increment(); // Count: 2
// increment(); // Count: 3

// const increment2 = counter();
// increment2()
// increment2()
// increment2()

// ```
// * Practice Task — Closures
// * task1
// Write this yourself:
// 1. Create a makeMultiplier function that returns a function:

// ```

// function makeMulitplier(multiplier) {
//   return function (num) {
//     return num * multiplier;
//   };
// }

// const double = makeMulitplier(2);
// const triple = makeMulitplier(3);

// console.log(double(10));
// console.log(triple(20));

// * task 2

// 2. Create a bankAccount function with a private balance that returns an object with deposit, withdraw and getBalance functions:

// function bankAccount(initialBalance) {
//   let balance = initialBalance;
//   return {
//     deposit: function(amount){
//       balance += amount;
//       console.log(`Dear Customer, ${amount} has been credited to your account, your new balance is Rs.${balance}`);
//     },
//     withdraw: function(amount){
//       balance -= amount;
//       console.log(`Dear Customer, ${amount} has been debited from you account, your new balance is Rs.${balance}`);
//     },
//     getBalance: function(){
//       console.log(`Dear customer, you current a/c balance is Rs.${balance}`);
//     },
//   };
// }

// const bankAmount = bankAccount(10000);
// bankAmount.deposit(5000)
// bankAmount.withdraw(15000)
// bankAmount.deposit(15000)
// bankAmount.getBalance()

// function eCommerce() {
//   let items = [];
//   return {
//     addItems: function (itemName, price) {
//       items.push({ Name: itemName, Price: price });
//     },
//     removeItems: function (query) {
//       items = items.filter((curItem) => curItem.Name !== query);
//     },
//     getTotal: function () {
//       const total = items.reduce(function (acc, curVal) {
//         return acc + curVal.Price;
//       }, 0);
//       console.log(`The total price of the cart is ${total}`);
//     },
//     getCartItems: function () {
//       console.log(items);
//     },
//   };
// }

// const user = eCommerce();
// user.addItems("laptop", 2000);
// user.addItems("phone", 200);
// user.addItems("charger", 20);
// user.getTotal()
// user.removeItems("laptop");

// user.getCartItems();

// ? shopping cart

// function shoppingCart() {
//   let items = [];
//   return {
//     // ? to add the items
//     addItems: function (name, price) {
//       items.push({ name: name, price: price });
//     },

//     // ? to remvoe the items with the help of name
//     removeItems: function (query) {
//       items = items.filter((curElem) => curElem.name !== query);
//     },

//     // ? to get the total of the cart items price
//     getTotal: function () {
//       let total = items.reduce((acc, curElem) => curElem.price + acc, 0);
//       console.log(`The total amount for the cart is ${total}`);
//     },

//     // ? to show the items that are present in the array
//     showItems: function () {
//       console.log(items);
//     },
//   };
// }

// const user = shoppingCart();
// user.addItems("laptop", 12090);
// user.addItems("mobile", 12090);
// user.addItems("airbud", 12090);
// user.removeItems("laptop");
// user.getTotal()
// user.showItems();

// ? SCORE TRACKER

// function scoreTracker(initScore){
//   let score =  [initScore]
//   return {
//     addScore : function(userScore){
//       score.push(userScore);
//     },
//     getHighest : function(){
//       console.log(Math.max(...score));
//     },
//     getTotal : function(){
//       let totalScore = score.reduce((acc, currElem)=> acc + currElem, 0);
//       console.log(`The total score is ${totalScore}`);
//     },
//     reset: function(){
//       score = []
//       console.log(`Score Reset to 0`);

//     }
//   }
// }

// const user = scoreTracker(0);
// user.addScore(50);
// user.addScore(100)
// user.getTotal()
// user.getHighest()
// user.reset()
// user.getTotal()

// ? login system

// function loginSystem(userQuery) {
//   let password = userQuery;
//   let count = 0;
//   return {
//     attmpt: function (query) {
//       if (count >= 3) {
//         console.log("account locked");
//         return;
//       }
//       if (query === password) {
//         console.log("login successful!");
//       } else {
//         count++;
//         console.log(`Wrong password! ${3 - count + 1} attempts left`);
//       }
//     },
//   };
// }

// const userTry = loginSystem("Sagar123");

// userTry.attmpt("jkalsdfjlk;ajdk");
// userTry.attmpt("jkalsdfjlk;ajdk");
// userTry.attmpt("sagar123R");
// userTry.attmpt("Sagar123");

// ? PURE  AND IMPURE FUNCTIONS

// ? a pure function is like a calcultor, if we calculate 2 + 3 , then no matter what it gives us 5, that's the pure function is

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 4));

// ? impure function 

// let discount = 10;
// function priceAfterDiscount(price){
//   return price - discount
// }


// console.log(priceAfterDiscount(200));
// discount = 20;
// console.log(priceAfterDiscount(200));

// ? things to remeber

// Pure    = calculator 🧮 (same input, same output, touches nothing!)
// Impure  = moody 😄 (depends on outside, changes things!)


// ? 📦 Recursion
// A recursive function is a function that calls itself until a condition is met!

// STEP 1 - countdown
// function countdown(n) {
//   if (n === 0) {          // BASE CASE - stop here!
//     console.log("Done!");
//     return;
//   }
//   console.log(n);
//   countdown(n - 1);       // calls itself with smaller value!
// }

// countdown(5);


// function factorial(n) {
//   if (n === 1) return 1;        // BASE CASE
//   return n * factorial(n - 1);  // RECURSIVE CASE
// }

// console.log(factorial(5)); // 120
// console.log(factorial(3)); // 6

// Like YouTube comments with replies!
const comments = {
  text: "Great video!",
  replies: [
    {
      text: "I agree!",
      replies: [
        { text: "Me too!", replies: [] }
      ]
    }
  ]
};

function showComments(comment, level = 0) {
  console.log(" ".repeat(level * 2) + comment.text);
  comment.replies.forEach(reply => {
    showComments(reply, level + 1); // calls itself!
  });
}

showComments(comments);