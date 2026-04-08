// 1. getElementById - selects by ID (returns single element)
// const title = document.getElementById("title");
// console.log(title);

// 2. getElementsByClassName - selects by class (returns collection!)
// const descriptions = document.getElementsByClassName("description");
// console.log(descriptions);

// 3. getElementsByTagName - selects by tag (returns collection!)
// const paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

// 4. querySelector - selects FIRST match (CSS selector syntax)
// const firstDesc = document.querySelector(".description");
// console.log(firstDesc);

// 5. querySelectorAll - selects ALL matches (returns NodeList!)
// const allDesc = document.querySelectorAll(".description");
// console.log(allDesc);

// selecting by ID with querySelector
// const btn = document.querySelector("#btn");
// console.log(btn);

// * READING AND CHANGING CONTENT

// console.log(title.innerHTML);
// console.log(title.innerText);
// console.log(title.textContent);

// // CHANGING content
// title.innerHTML = "Welcome Sagar! 🔥";
// title.textContent = "Changed with textContent!";

// // innerHTML can render HTML tags!
// title.innerHTML = "<span style='color: red'>Red Title!</span>";

// ? DOM MANIPULATION

// * 1. Select the #container and change its innerHTML to include a new h2 and p tag

// const container = document.querySelector("#container");

// container.innerHTML =
//   "<h2>This is the changed one</h2> <p>This is also done with the help of innerHTML</p>";

// // # Select the first .description and change its textContent to your own text

// const desc = document.querySelector(".description");

// desc.textContent = "This is changed with the help of textContent";

// const lists = document.querySelector("ul");

// lists.innerHTML = `
//       <li>Kathmandu</li>
//       <li>Bhaktapur</li>
//       <li>Lalitpur</li>
//       <li>Dhading</li>
//       <li>Pokhara</li>
// `;

// const btn = document.querySelector("#btn");

// READ attribute
// console.log(btn.getAttribute("id")); // btn

// SET attribute
// btn.setAttribute("id", "newBtn");
// btn.setAttribute("disabled", ""); // disables the button!
// console.log(btn.getAttribute("id")); // newBtn

// REMOVE attribute
// btn.removeAttribute("disabled"); // enables button again!

// Direct property access (shortcut!)
// const title = document.querySelector("h1");
// console.log(title.id); // title
// title.id = "newTitle";
// console.log(title.id); // newTitle

// Common attributes
// const link = document.createElement("a");
// link.setAttribute("href", "https://github.com/sagar-8848");
// link.setAttribute("target", "_blank");
// link.textContent = "My GitHub";
// document.body.appendChild(link);

// ? Using CSS in the js

// ? 1st method

// const title = document.querySelector('h1');

// title.style.color = 'blue'
// title.style.fontSize = '10px'
// title.style.backgroundColor = 'grey'

// ? 2nd method ( use multiple text of css here)

// title.style.cssText = `
// color: yellow;
// fontSize: 60px;
// padding: 10px;
// border-radius : 5px
// `

// ! Note : In, JS
// font-size    →  fontSize
// background-color → backgroundColor
// border-radius → borderRadius

// ?  ClassList

// Instead of changing styles directly, the best practice is adding/removing CSS classes!

// const title = document.querySelector("h1");

// // ADD a class
// title.classList.add("highlight");
// console.log(title);

// remvoe the class

// title.classList.remove("highlight");
// console.log(title);

// toggle the class (meaning if class exist remove it and if not exist then add)

// title.classList.toggle("highlight")
// title.classList.toggle("highlight")
// title.classList.toggle("highlight")

//  to check if the class exists or not

// const check = title.classList.contains("highlight");
// console.log(check);

// ? add mulitple class

// title.classList.add("ram", "hari")
// console.log(title);

// ? removing multiple class

// title.classList.remove("ram", "hari")
// console.log(title);

// ? task

// 1. Select the button #btn
// 2. Add classes active and large to it
// 3. Check if it contains active → log result
// 4. Toggle active twice and log contains after each toggle
// 5. Remove large class

// ? answer

// const btn = document.querySelector('#btn');

// btn.classList.add("active", "large");

// let check = btn.classList.contains("active");
// console.log(check);

// btn.classList.toggle("active");
// console.log(btn);

// btn.classList.toggle("active");
// console.log(btn);

// btn.classList.remove("large")

// CREATE a new element
// const newDiv = document.createElement("div");
// const newH2 = document.createElement("h2");
// const newP = document.createElement("p");

// ADD content to it
// newH2.textContent = "I was created by JS!";
// newP.textContent = "This paragraph too!";

// ADD classes/styles
// newDiv.classList.add("new-card");
// newDiv.style.backgroundColor = "lightblue";
// newDiv.style.padding = "20px";
// newDiv.style.margin = "20px";

// APPEND child into parent
// newDiv.appendChild(newH2);  // put h2 inside div
// newDiv.appendChild(newP);   // put p inside div

// INSERT into the page
// document.body.appendChild(newDiv);   // adds at END of body

// PREPEND - adds at BEGINNING
// const newTitle = document.createElement("h3");
// newTitle.textContent = "I am at the top!";
// document.body.prepend(newTitle);

// insertAdjacentHTML - more flexible!
// const container = document.querySelector("#container");
// container.insertAdjacentHTML("beforeend", "<p>Added inside container!</p>");
// container.insertAdjacentHTML("afterend", "<p>Added after container!</p>");

// * NOTE:
// appendChild : appends the new element at the end of the parent
// prepend : appends the new element at the beggingng of the parent

// ? REMOVING ELEMENTS

// WAY 1 - remove() (modern, simple!)
// const title = document.querySelector("h1");
// title.remove(); // removes itself!

// WAY 2 - removeChild (older way)
// const list = document.querySelector("#list");
// const firstItem = list.firstElementChild;
// list.removeChild(firstItem); // parent removes child!

// ? TRAVERSING THE DOM

// ? moving between elements without selecting them directly

const lists = document.querySelector("#list");

// ? parent element of the list
console.log(lists.parentElement);

// ? to accss the children of the lists

console.log(lists.children);
console.log(lists.firstElementChild);
console.log(lists.lastElementChild);

// ? siblings

const firstItem = lists.firstElementChild;
console.log(firstItem.nextElementSibling);
console.log(firstItem.previousElementSibling);

// ? practical use - loop through every child

Array.from(lists.children).forEach((item)=> {
  item.style.color = "blue";
  console.log(item.textContent);
})