// const btn = document.querySelector("#btn");
// const dblBtn = document.querySelector("#dblBtn");
// const input = document.querySelector("#input");
// const input2 = document.querySelector("#input2");
// const box = document.querySelector("#box");
// const form = document.querySelector("#form");
// const title = document.querySelector("#title");

// 1. CLICK
// btn.addEventListener("click", () => {
//   console.log("Button clicked!");
//   btn.style.backgroundColor = "green";
// });

// 2. DOUBLE CLICK
// dblBtn.addEventListener("dblclick", () => {
//   console.log("Double clicked!");
//   dblBtn.style.backgroundColor = "red";
// });

// 3. MOUSEOVER & MOUSEOUT
// box.addEventListener("mouseover", () => {
//   box.style.backgroundColor = "orange";
//   console.log("Mouse entered box!");
// });

// box.addEventListener("mouseout", () => {
//   box.style.backgroundColor = "purple";
//   console.log("Mouse left box!");
// });

// 4. KEYDOWN & KEYUP
// input.addEventListener("keydown", (e) => {
//   console.log(`Key down: ${e.key}`);
// });

// input.addEventListener("keyup", (e) => {
//   console.log(`Key up: ${e.key}`);
// });

// 5. INPUT - fires every time value changes
// input2.addEventListener("input", (e) => {
//   console.log(`Input value: ${e.target.value}`);
//   title.textContent = e.target.value || "Events in JS!";
// });

// 6. CHANGE - fires when input loses focus with new value
// input2.addEventListener("change", (e) => {
//   console.log(`Changed to: ${e.target.value}`);
// });

// 7. SUBMIT
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); // stops page refresh!
//   const formInput = document.querySelector("#formInput");
//   console.log(`Form submitted: ${formInput.value}`);
// });

// 8. LOAD & DOMContentLoaded
// window.addEventListener("load", () => {
//   console.log("Everything loaded! (images, CSS, JS)");
// });

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM ready! (faster than load)");
// });

// ? Event (e)

// document.addEventListener("click", (e) => {
//   console.log(e.target); // element that was clicked
//   console.log(e.type); // "click"
//   console.log(e.clientX); // X position of click
//   console.log(e.clientY); // Y position of click
//   console.log(e.timeStamp); // when it happened
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

// BUBBLING - event travels UP the DOM tree
// child fires → parent fires → grandparent fires!

// const outer = document.createElement("div");
// const inner = document.createElement("div");
// const btn2 = document.createElement("button");

// outer.style.cssText = "padding:40px; background:lightblue; margin:20px";
// inner.style.cssText = "padding:30px; background:lightgreen";
// btn2.textContent = "Click me to see bubbling!";

// inner.appendChild(btn2);
// outer.appendChild(inner);
// document.body.appendChild(outer);

// outer.addEventListener("click", () => console.log("OUTER clicked!"));
// inner.addEventListener("click", () => console.log("INNER clicked!"));
// btn2.addEventListener("click", () => console.log("BUTTON clicked!"));

// When you click button → logs:
// BUTTON clicked!
// INNER clicked!   ← bubbles up!
// OUTER clicked!   ← bubbles up more!

// STOP BUBBLING with stopPropagation!
// btn2.addEventListener("click", (e) => {
//   e.stopPropagation(); // stops at button, doesn't bubble!
//   console.log("Stopped here!");
// });

// ? Event Delegation

// ❌ BAD - listener on each li
// const items = document.querySelectorAll("li");
// items.forEach((item) => {
//   item.addEventListener("click", () => console.log(item.textContent));
// });

// ✅ GOOD - one listener on parent (event delegation!)
// const ul = document.createElement("ul");
// ["Item 1", "Item 2", "Item 3"].forEach((text) => {
//   const li = document.createElement("li");
//   li.textContent = text;
//   ul.appendChild(li);
// });
// document.body.appendChild(ul);

// ul.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     // check if li was clicked
//     console.log(`Clicked: ${e.target.textContent}`);
//     e.target.style.color = "red";
//   }
// });

// WHY delegation is powerful:
// Even dynamically added li items will work!
// const newLi = document.createElement("li");
// newLi.textContent = "Item 4 (added dynamically!)";
// ul.appendChild(newLi); // click this → still works! ✅
