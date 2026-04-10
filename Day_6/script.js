// * 🧠 Step 1: Understand the Idea First

// Before coding, lock this in:

// 👉 An event = something that happens in the browser
// 👉 We listen to it and react

// Example:

// User clicks → we run code
// User types → we update UI
// User submits form → we handle data



// *  🛠 Step 2: Your First Event (Click)
// 👉 Add this in script.js
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   console.log("Button clicked!");
// });



// * ⚡ Step 3: Make It Interactive



// let count = 0;

// btn.addEventListener("click", () => {
//   count++;
//   console.log("Clicked:", count);
// });

// 👉 Now every click increases count


// * 🧠 Step 4: Event Object (IMPORTANT)


// btn.addEventListener("click", (e) => {
//   console.log(e);
// });

// 👉 You’ll see a big object in console  , ;

// 👉 e.target = which element was clicked

// BASIC SYNTAX
// element.addEventListener("eventType", callbackFunction);

// THREE WAYS to write the callback:
// 1. Named function
// btn.addEventListener("click", handleClick);
// function handleClick() { console.log("clicked!"); }

// 2. Anonymous function
// btn.addEventListener("click", function() { console.log("clicked!"); });

// 3. Arrow function (most common!)
// btn.addEventListener("click", () => console.log("clicked!"));


// * ADVANCED EVENT

// Now you go from:
// 👉 “I can use events”
// to
// 👉 “I understand how the DOM actually works”


// * 🌊 1. Event Bubbling (CORE CONCEPT)
// 🧠 Idea:

// When you click something:

// Event goes from child → parent → up the DOM

// const parent  = document.getElementById("parent");
// const child = document.getElementById("child")

// parent.addEventListener("click", ()=> {
//   console.log("parent elem clicked");
// })

// // ? output - parent elem clicked
// child.addEventListener("click", (e)=> {
//   // e.stopPropagation()
//   console.log("child elem clicked!");
// })

// ? child elem clicked, parent elem clicked 
// ? why =-> because, child is inside the parent and when the child is clicked the parent is also running. to stop we can use e.stopPropgagation()


// * 🧠 When To Use What
// ✅ Use bubbling (default)
// When using event delegation
// When handling many child elements efficientl


// * 🛑 Stop propagation when:
// You want strict control
// You don’t want parent logic to run

// ? Event Object 

// document.addEventListener("click", (e) => {
//   console.log(e.target);        // element that was clicked
//   console.log(e.type);          // "click"
//   console.log(e.clientX);       // X position of click
//   console.log(e.clientY);       // Y position of click
//   console.log(e.timeStamp);     // when it happened
// });

// e.preventDefault() - stops default browser behavior
// const link = document.createElement("a");
// link.href = "https://google.com";
// link.textContent = "Click me (won't go to Google!)";
// document.body.appendChild(link);

// link.addEventListener("click", (e) => {
//   e.preventDefault(); // stops navigation!
//   console.log("Link clicked but navigation stopped!");
// });

// e.stopPropagation() - stops event bubbling (see next!)