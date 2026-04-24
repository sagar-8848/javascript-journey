// ? Day 8

// 1. String & Number methods
// 2. Symbols
// 3. Map & Set
// 4. WeakMap & WeakSet
// 5. Nullish coalescing (??)
// 6. Logical assignment operators
// 7. Classes & OOP
// 8. Constructor & methods
// 9. Inheritance (extends, super)
// 10. Encapsulation & Polymorphism
// 11. Prototypes & prototype chain
// 12. Modules (import/export)
// 13. 🔨 Task + Project

// * PART - 1 ==> String Method
// ```
// Strings = data cleaning + Searching + transforming

// in real apps:

// - search bar - .includes()
// - API data -trim()
// - formatting - repalce()
// - splitting - split()
// ```
// ? practise

// const str = "   hello Sagar from Nepal!   ";

// ? to remove the extra spaces at the beginning and end

// let value = str.trim();
// console.log(value);

// ? check if the String "Sagar" exists or not?

// let doesIncludes = str.toLocaleLowerCase().includes("Sagar"); // return the value in boolean
// console.log(doesIncludes);

// ? to replace the value

// let newChangedValue = value.replace("Sagar", "Ram");
// console.log(newChangedValue);

// ? convert into array of words

// let splitVal = value.split(" ");
// console.log(splitVal);

// * PART 2 --> Number Methods

// ```
// const num = 3.14159;

// let rounded = num.toFixed(2);
// console.log(rounded);

// let randomNum = (Math.random() * 10) .toFixed(0);
// console.log(randomNum)

// let convertToNum = parseInt('42px');
// console.log(convertToNum)

// let checkInt = Number.isInteger(5.5);
// console.log(checkInt)

// ```

// * PART 3 -  MAP AND SET (Core Understanding)

// ? Set() => sets the unique values only , it removes the duplicate value.

// ? Map() => key value pair (but better then object) (it store the structure data)

// const nums = [1, 2, 2, 3, 4, 4, 5];

// ? remvoe the duplicate numbers

// const unique = new Set(nums);  // set le chai unique value dinxa hai

// console.log(nums);
// console.log(unique);

// ? adding and deleting value to the set object

// unique.add(10)

// console.log(unique);

// unique.delete(3);
// console.log(unique)

// ? loop through set

// let aSet = new Set([1,2,3,4,4,4,6,43]);

// aSet.forEach((curelem)=> {
//  console.log(curelem * 2)
// })

// ? real world use ( remove the duplicate data form the array)

// const nums = [1, 2, 2, 3, 3, 4, 5, 5];

// const unique = [...new Set(nums)];
// console.log(unique);

// * MAP  ( key value pairs, any type as key!)

// const map = new Map();

// map.set("name", "sagar");
// map.set("age", 20);
// map.set(1, "number key!");
// map.set(true, "booelan key")

// console.log(map.get("name"));
// console.log(map.get(1));
// console.log(map.get(true));
// console.log(map.get("age"))

// ? set sets the value as key value pair, and the get shows the value if exists;

// console.log(map.get("address"));

// ? to delete the value

// map.delete("age")
// console.log(map);

// * MAP VS OBJECT

// OBJECT KEYS = strings only
// Map keys = ANY TYPE
// Map preserves insertion order
// Map has .size property

// const newMap = new Map();

// newMap.set("name", "sagar");
// newMap.set("age", 20);
// newMap.set("isStudent", true);

// console.log(newMap.get("name"));
// console.log(newMap.has("age"));

// newMap.delete("age");
// console.log(newMap);

// newMap.forEach((value, key) => {
//   console.log(`${key} : ${value}`);
// });

// * 👉 Nullish Coalescing (??) vs OR (||)

// Use ?? when:

// 👉 “0 and empty string are VALID values”

// Example:

// Use || when:

// 👉 “Anything empty should fallback”

// Example:

// let username = "";
// username || "Guest"  // "Guest" ✅

// ?? → only null/undefined
// || → all falsy values

// * OOP (Object Oriented Progrmaming)

// 4 PILLARS of OOP:
// 1. Encapsulation  → bundle data + methods together
// 2. Inheritance    → child class gets parent's features
// 3. Polymorphism   → same method, different behavior
// 4. Abstraction    → hide complexity, show only essentials

// class Person{
//   constructor(name, age, country){
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }

//   getInfo(){
//     return `${this.name}, ${this.age}`
//   }

//   greet(){
//     return `Hi, I am ${this.name} and I am from ${this.country} currently, I am ${this.age}`
//   }

//   // ? setter

//   set newAge(age){
//     if(age < 0) throw new Error("Age cannot be less than 0 ");
//     this.age = age
//   }

// ? static methods -  belongs to class, not the instance

//   static create(name, age, country){
//     return new Person(name, age, country)
//   }
// }

// const sagar = new Person('sagar', 20, 'Nepal');
// console.log(sagar.getInfo());

// console.log(sagar.greet());

// sagar.newAge = 210;
// console.log(sagar.age);

// const ram = Person.create("ram", 32, "chamati");
// console.log(ram);

// static = use class directly
// normal = use object

// class Car{
//   constructor(brand){
//     this.carBrand = brand;
//   }

//   drive(){
//     console.log(`${this.carBrand} is being droven!`);
//   }
// }

// const c1 = new Car("Hilux");
// c1.drive()

// const c2 = new Car("Lambo");
// c2.drive();

// ? understanding static method ( Class Level)

// class car{
//   static showInfo(){
//     console.log("the car has mostly 4 wheels ")
//   }
// }

// car.showInfo()

// ? constructor → creates object
// ? normal method → object behavior
// ? static method → class-level utility

// ! small task 1
// class Calculator {
//   constructor(a, b) {
//     this.firstNum = a;
//     this.lastNum = b;
//   }

//   sum() {
//     return this.firstNum + this.lastNum;
//   }

//   multiply() {
//     return this.firstNum * this.lastNum;
//   }

//   static info() {
//     return "this is a simple calculator";
//   }

//   static isEven(num) {
//     return num % 2 === 0;
//   }
// }

// let c1 = new Calculator(100, 200);

// console.log(c1.sum());              // 300
// console.log(c1.multiply());         // 20000

// console.log(Calculator.info());     // this is a simple calculator
// console.log(Calculator.isEven(100));// true

// ! small task 2 (demo bank management system)

// class BankAccount {
//   constructor(name, initBalance) {
//     this.accountName = name;
//     this.balance = initBalance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//     console.log(`Deposit Successful of Rs.${amount}`);
//   }

//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log("Insufficient Balance!");
//       return;
//     }
//     this.balance -= amount;
//     console.log(`Debited Rs.${amount}`);
//   }

//   getBalance() {
//     return this.balance;
//   }

//   static bankRules() {
//     console.log("Minimum balance must be maintained!");
//   }
// }

// let acc1 = new BankAccount("sagar", 10000);

// acc1.deposit(5000);
// acc1.withdraw(1000);
// acc1.withdraw(20000);

// console.log(acc1.getBalance());

// BankAccount.bankRules();

// ! small task 3 (user system)

// class User {
//   constructor(name, email, isLoggedIn) {
//     this.name = name;
//     this.email = email;
//     this.isLoggedIn = isLoggedIn;
//   }

//   login() {
//     this.isLoggedIn = true;
//     console.log("User logged in!");
//   }

//   logout() {
//     this.isLoggedIn = false;
//     console.log("User logged out");
//   }

//   getStatus() {
//     return this.isLoggedIn ? console.log("online") : console.log("offline");
//   }

//   updateEmail(newEmail) {
//     this.email = newEmail;
//     console.log("user email changed success!");
//   }

//   static platformName() {
//     return "MyApp v1.0";
//   }
// }

// let u1 = new User("ram", "ram@gmail.com", false)

// u1.login()
// u1.logout()
// u1.updateEmail("shyam@gmail.com");
// u1.login()
// u1.getStatus()
// console.log(u1)
// console.log(User.platformName());

// * INHERITANCE (child class can reuse properties + methods of Parent class)

// ?  Parent class

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound `);
//   }
// }

// // * child class

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); //calling the parent constructor
//     this.breed = breed;
//   }

//   // speak(){
//   //   console.log(`${this.name} barks loud`)
//   // }

//   bark() {
//     console.log(`${this.name} is barking.`);
//   }
// }

// d1 = new Dog("bulldog");
// d1.speak();

// Inheritance = reuse + extend + modify behavior

// extends → inherit from parent
// super() → call parent constructor
// child can:
//   - use parent methods
//   - add new methods
//   - override existing methods

// d2 = new Dog("Rex", "German Shephred");

// d2.bark(); // own propery
// d2.speak(); // inherited property from parent

// d3 = new Dog("Tommy", "Husky");  name and the breed
// d3.speak()

// ? SMALL TASK FOR THE INHERITANCE

// ! E-COMMERCE SYSTEM

// class User {
//   constructor(name, email) {
//     this.user_name = name;
//     this.user_email = email;
//   }

//   login() {
//     console.log("user logged in!");
//   }

//   logout() {
//     console.log("user logg out!");
//   }
// }

// class Customer extends User {
//   constructor(name, email) {
//     super(name, email);
//     this.cart = [];
//   }

//   addToCart(item) {
//     this.cart.push(item);
//     console.log(`${item} added to the cart!`);
//   }

//   viewCart() {
//     this.cart.forEach((curItem) => {
//       console.log(curItem);
//     });
//   }
// }

// class Admin extends User {
//   constructor(name, email) {
//     super(name, email);
//     this.role = "admin";
//   }

//   login() {
//     console.log("admin logged in");
//   }

//   logout() {
//     console.log("admin logged out");
//   }

//   addProduct(productName) {
//     console.log(`${productName} added to the Store!`);
//   }

//   deleteProduct(productName) {
//     console.log(`${productName} deleted from the Store!`);
//   }
// }

// let cus1 = new Customer("Sagar", "dangol00@gmail.com", []);
// cus1.addToCart("mobile phone")
// cus1.addToCart("Laptop")
// cus1.addToCart("Tablet")

// cus1.viewCart()
// let admin1 = new Admin("Ram", "admin@gmail.com", )
// admin1.addProduct("Smart Tv")
// admin1.deleteProduct("Smart Tv")

// * ORDER SYSTEM (E COMMERCE LEVEL 2)

// ! parent

// class User {
//   constructor(name, email) {
//     this.user_name = name;
//     this.user_email = email;
//   }

//   login() {
//     console.log("user logged in");
//   }

//   logout() {
//     console.log("user logged out");
//   }
// }

// class Customer extends User {
//   constructor(user_name, user_email) {
//     super(user_name, user_email);
//     this.orders = [];
//   }

//   placeOrderItems(item) {
//     this.orders.push(item);
//     console.log(`order placed: ${item} `);
//   }

//   viewOrder() {
//     this.orders.forEach((curitem) => console.log(curitem));
//   }
// }

// class Admin extends User {
//   constructor(user_name, user_email) {
//     super(user_name, user_email);
//     this.role = "admin";
//   }

//   login() {
//     console.log("admin logged in!");
//   }

//   viewAllOrders(customer) {
//     customer.orders.forEach((curItem) => console.log(curItem));
//   }

//   cancelOrder(customer, item) {
//     customer.orders = customer.orders.filter(
//       (curItem) => curItem !== item.toLowerCase(),
//     );
//     console.log(`Order ${item} cancelled for ${customer.user_name}`);
//   }
// }

// const u1 = new Customer("ram", "ram@gmail.com");
// // u1.login()
// u1.placeOrderItems("Mobile");
// u1.placeOrderItems("Tablet");
// u1.placeOrderItems("Laptop");
// u1.placeOrderItems("Bottle");
// u1.placeOrderItems("Computer");

// // u1.viewOrder()

// const admin1 = new Admin("Admin", "admin@gmail.com");
// admin1.login();
// admin1.viewAllOrders(u1);
// admin1.cancelOrder(u1, "Mobile");
// console.log(u1);

// ? practise task 3

// ! parent

// class Product {
//   constructor(name, price, stock) {
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
//   }

//   sell(quantity) {
//     if (quantity > this.stock) {
//       console.log("not enough stock, please try again!");
//       return;
//     } else {
//       this.stock -= quantity;
//     }
//   }

//   restock(quantity) {
//     this.stock += quantity;
//   }

//   getDetails() {
//     return `${this.name} (Stock :${this.stock})`;
//   }
// }

// // ? DigitalProduct extends Product

// class DigitalProduct extends Product {
//   constructor(name, price, stock, fileSize, format) {
//     super(name, price, stock);
//     this.fileSize = fileSize;
//     this.format = format;
//   }

//   download() {
//     console.log(`Downloading ${this.name}!`);
//   }

//   getDetails() {
//     return `${this.name}: ${this.stock} - ${this.fileSize}MB ${this.format} `;
//   }
// }

// class InventoryManager {
//   constructor(){
//     this.products = []
//   }

//   addProducts(prodName){
//     this.products.push(ProdObj);
//     console.log(`${ProdObj.name} added Success!`)
//   }

//   findProduct(prodName){
//    let filteredOne = this.products.find((curItem) => curItem.name,toLowerCase() === prodName.toLowerCase());
//    console.log(filteredOne)
//    if(!filteredOne){
//      console.log('product not found')
//      return null;
//     }
//     return filteredOne;
//   }

//   sellProducts(name, qty){
//     const product = this.findProduct(name);
//     if(!product) return;
//     product.sell(qty)
//   }

//   removeProduct(name) {
//     this.products = this.products.filter(
//       (p) => p.name.toLowerCase() !== name.toLowerCase()
//     );

//     console.log(`${name} removed from inventory`);
//   }

//   showAllProducts() {
//     this.products.forEach((p) => {
//       console.log(p.getDetails());
//     });
//   }
// }

// ? LEVEL 1

// class Dog{
//   constructor(name){
//     this.name = name;
//   }
//   bark(){
//     console.log(`${this.name} is barking`)
//   }
// }

// const d1 = new Dog("german");
// d1.bark()

// ? lEVEL 2

// ? Class room system

// class Student{
//   constructor(name, marks){
//     this.name = name;
//     this.marks = marks;
//   }

//   introduce(){
//     console.log(`hey, i am ${this.name}!`)
//   }

//   getMarks(){
//     console.log(`I have obtained ${this.marks}`)
//   }
// }

// class ClassroomManager{
//   constructor() {
//     this.studentData = []
//   };

//   addStudent(stuDet){
//     this.studentData.push(stuDet)
//     console.log(`${stuDet.name} added succcess`)
//   }

//   showAllStudents(){
//     this.studentData.forEach((curStudent)=> {
//       console.log(curStudent.name)
//     })
//   }

//   showAllMarks(){
//     this.studentData.forEach((curStudentMarks)=> {
//       console.log(curStudentMarks.marks)
//     })
//   }
// }

// const s1 = new Student('Ram', 90);
// const s2 = new Student('Sam', 40);
// const s3 = new Student('hari', 70);

// s1.introduce();

// const m1 = new ClassroomManager('Sagar');
// m1.addStudent(s1)
// m1.addStudent(s2)
// m1.addStudent(s3)

// m1.showAllStudents();
// m1.showAllMarks()

// ? play list system

// class Song {
//   constructor(title, artist, duration) {
//     this.title = title;
//     this.artist = artist;
//     this.duration = duration;
//   }

//   play() {
//     console.log(`playig ${this.title} by ${this.artist}`);
//   }

//   getInfo() {
//     console.log(
//       `song name: ${this.title}, artist: ${this.artist}, duration: ${this.duration}`,
//     );
//   }
// }

// class Playlist {
//   constructor() {
//     this.songs = [];
//   }

//   addSong(songDet) {
//     this.songs.push(songDet);
//     console.log(`${songDet.title} song added success`);
//   }

//   showAllSongs() {
//     this.songs.forEach((curSong) => {
//       curSong.getInfo();
//     });
//   }
//   playAll() {
//     this.songs.forEach((cursong) => {
//       cursong.play();
//     });
//   }

//   findSong(userQuery) {
//     const found = this.songs.find((curSong) =>
//       curSong.title.toLowerCase().includes(userQuery.toLowerCase()),
//     );

//     if (!found) {
//       console.log("song not found!");
//       return;
//     }
//     console.log("song found:");
//     found.getInfo();
//   }
// }

// const song1 = new Song("ye dooriyan", "random", 400);
// const song2 = new Song("tum todo na dil", "Arijit Singh", 300);

// const p1 = new Playlist();
// p1.addSong(song1);
// p1.addSong(song2);
// p1.showAllSongs();
// p1.playAll();
// p1.findSong("tum todo");

// ? shoping cart system

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   getDetails() {
//     console.log(`Product Name: ${this.name}, Price: ${this.price}`);
//   }
// }

// class Cart {
//   constructor() {
//     this.items = [];
//   }

//   addItem(item) {
//     this.items.push(item);
//     console.log(`${item.name} added to the cart!`);
//   }

//   removeItem(userQuery) {
//     this.items = this.items.filter(
//       (curItem) => curItem.nam.toLowerCase() !== userQuery.toLowerCase(),
//     );

//     if (!filteredIems) {
//       console.log("No items to remove!");
//       return;
//     }
//     console.log(filteredIems);
//     console.log("item remove success");
//   }

//   showCart() {
//     this.items.forEach((curItem) => console.log(curItem));
//   }

//   getTotal() {
//     let total = this.items.reduce((acc, curval) => acc + curval.price, 0);
//     console.log(total);
//   }
// }

// let p1 = new Product("airbud", 1000);
// let p2 = new Product("charger", 2000);
// let p3 = new Product("speaker", 3000);

// let c1 = new Cart();

// c1.addItem(p1);
// c1.addItem(p2);
// c1.addItem(p3);

// c1.removeItem("airbud");

// c1.showCart();

// c1.getTotal();

// * ENCAPSULATION

// ? hiding internal data, allowing contolld access

// ! THIS IS WITHOUT ENCAPSULATION

// class BankAccount {
//   constructor(balance) {
//     this.balance = balance;
//   }
// }

// const acc = new BankAccount(2000);
// const anotherAcc = new BankAccount(4000)
// console.log(acc.balance)
// console.log(anotherAcc.balance)

// ! with the help of encapsulation

// ? banking system with encapsulation

// class BankAccount {
//   #balance;

//   constructor(owner, balance) {
//     this.owner = owner;
//     this.#balance = balance;
//   }

//   deposit(depAmnt) {
//     if (depAmnt < 0) {
//       console.log("Amount cannot be Negative");
//       return;
//     }
//     this.#balance += depAmnt;
//     console.log(`Rs.${depAmnt} credited to your account!`);
//   }

//   withdraw(wthAmnt) {
//     if (wthAmnt > this.#balance) {
//       console.log("not enough balance, please try again!");
//       return;
//     }

//     this.#balance -= wthAmnt;
//     console.log(`Rs.${wthAmnt} debited from your account!`);
//   }

//   getBalance() {
//     console.log(`Your current balance is ${this.#balance}`);
//   }
// }

// const acc1 = new BankAccount("sagar", 20000);
// acc1.deposit(10000);
// acc1.withdraw(20000);
// acc1.getBalance();

// console.log(acc1);

// ? values can not be accesed direcly, but with the help of method, we can acces it like the closures mate,

// ? POLYMORPHISM  (Overriding  -> meaning  -> one interface and multiple implementations)

// class User{
//   loign(){
//     console.log('user logged in!')
//   }
// }

// class Admin extends User{
//   login(){
//     console.log('admin logged in with special attribute')
//   }
// }

// let u1 = new User()
// u1.loign()

// let a1 = new Admin();
// a1.login()

// ? shape system

// class Shape {
//   area() {
//     console.log("this must be overridden!");
//   }
// }

// class Rectangle extends Shape {
//   constructor(length, breadth) {
//     super();
//     this.l = length;
//     this.b = breadth;
//   }

//   area() {
//     console.log(`The area of rectangle is ${this.l * this.b}`);
//   }
// }

// class Circle extends Shape {
//   constructor(r) {
//     super();
//     this.r = r;
//   }

//   area() {
//     console.log(`The area of the Cricle is ${3.22 * this.r * this.r}`);
//   }
// }

// const shapes = [new Rectangle(20, 30), new Circle(20)]

// shapes.forEach((curItem) => curItem.area())


// 🎯 Now — 4 Pillars of OOP (Final Clear Summary)
// 1️⃣ Encapsulation → “Protect your data”

// 👉 Idea:
// Hide data and control access

// Example:
// #balance
// deposit()
// withdraw()

// 👉 You learned:

// private fields #
// controlled methods
// 🧠 Real meaning:

// “No one should break my data directly”

// 2️⃣ Inheritance → “Reuse code”

// 👉 Idea:
// Child class gets parent features

// Example:
// class Admin extends User

// 👉 You learned:

// extends
// super()
// 🧠 Real meaning:

// “Don’t rewrite same logic again”

// 3️⃣ Polymorphism → “Same method, different behavior”

// 👉 Idea:
// Same function name → different output

// Example:
// login() → User vs Admin
// area() → Rectangle vs Circle
// 🧠 Real meaning:

// “I don’t care what object it is, just call the method”

// 4️⃣ Abstraction → “Hide complexity”

// 👉 Idea:
// Show only what’s needed, hide the rest

// You already did it (without noticing):
// acc.deposit(1000)

// 👉 You don’t know:

// how balance is updated internally
// how validation works
// 🧠 Real meaning:

// “Use it, don’t worry how it works”

// 💥 Final mental model (very important)

// Think like this:

// Encapsulation → protect data
// Inheritance → reuse logic
// Polymorphism → flexible behavior
// Abstraction → simplify usage