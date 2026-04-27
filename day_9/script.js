// ? Error handling in js

// 📦 Part 1 — Types of Errors
// JS has 3 types of errors you'll face daily:
// javascript// 1. SYNTAX ERROR - code can't even run
// const x = {  ← missing closing brace
// Caught by VS Code/editor before running

// 2. RUNTIME ERROR - code runs but crashes
// const user = null;
// console.log(user.name); // TypeError: Cannot read properties of null

// 3. LOGIC ERROR - code runs but gives wrong result
// function add(a, b) {
//   return a - b; // wrong operator! no error thrown, just wrong answer
// }
// console.log(add(5, 3)); // 2 instead of 8

// ? The hardest error to find is the logical error.

// * Part 2

// Without protection:

// const user = null;
// console.log(user.name); // 💥 crash
// console.log("app still running?"); // ❌ never runs
// 👉 One error → whole app stops

// ✅ With try/catch
// try {
//   const user = null;
//   console.log(user.name);
// } catch (err) {
//   console.log("Error caught!");
//   console.log(err.message);
// }

// console.log("App still running ✅");

// 👉 Now:

// Error happens ✔
// App survives ✔
// You control behavior ✔

// * what is err in parameter of catch we pass

// It’s an object:

// {
//   name: "TypeError",
//   message: "Cannot read properties of null",
//   stack: "..."
// }

// ? It's used in real world debugging!

// console.log(err.name);     // TypeError
// console.log(err.message);  // actual issue
// console.log(err.stack);    // where it happened

// * finally (small but powerful)
// try {
//   console.log("Trying...");
// } catch (err) {
//   console.log("Error!");
// } finally {
//   console.log("Always runs");
// }

// 👉 Use case:

// closing DB
// stopping loaders
// cleanup tasks

// Mini task

// ? task 1

// function safeParse(str) {
//   try {
//     return JSON.parse(str);
//   } catch (err) {
//     // console.log('Invalid Json msg', err.message)
//     return null;
//   }
// }
// console.log(safeParse(`invalid msg`));

// ? task 2

// function getUsername(user) {
//   try {
//     return user.name;
//   } catch (err) {
//     return "user not found!";
//   }
// }

// console.log(getUsername(null));

// ? Part 3 -> throw

// * we just decide when something is invalid

// function withdraw(amount){
//   if(amount <= 0){
//     throw new Error('Amount must be postive ')
//   }
//   return `withdrawl success!`
// }

// try{
//   withdraw(-10)
// }
// catch(err){
//   console.log(err.message)
// }

// ? task age validator

// function validateAge(age) {
//   if (age < 18) {
//     throw new Error("Age must be greater than 18");
//   } else {
//     return "Acceses Granted! ";
//   }
// }

// try{
//   validateAge(10)
// }catch(err){
//   console.log(err.message)
// }

// ! Custom Error

// class ValidationError extends Error {
//   constructor(message, field) {
//     super(message);
//     this.name = "ValidationError";
//     this.field = field;
//   }
// }

// function validateEmail(email) {
//   if (!email.includes("@")) {
//     throw new ValidationError("Invalid email format", "email");
//   }
//   return "valid email, login success!";
// }

// try {
//   validateEmail("notavalidemail");
// } catch (err) {
//   if (err instanceof ValidationError) {
//     console.log("User mistake:", err.field);
//   } else {
//     console.log(err.message);
//   }
// }

// ? build duplicate error

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class DuplicateError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "DupliateError";
    this.field = field;
  }
}

// ? now create and function and pass the value with the validation

function registerEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("Invalid email format", "email");
  }

  if (email === "test@gmail.com") {
    throw new DuplicateError("email already used", email);
  }

  return "User Registration Success!";
}

try {
  registerEmail("test@gmail.com");
} catch (err) {
  if (err.name === "ValidationError") {
    console.log(err.message);
  }

  if (err.name === "DupliateError") {
    console.log(err.message);
  }
}
