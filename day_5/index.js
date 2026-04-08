// ?  DOM (Dcoument object model )

// ```
// 📦 Part 1 — What is the DOM?
// When browser reads your HTML file:


// HTML file
//     ↓
// Browser parses it
//     ↓
// Creates a DOM tree (Document Object Model)
//     ↓
// JavaScript can now access and manipulate it!

// HTML file
//     ↓
// Browser parses it
//     ↓
// Creates a DOM tree (Document Object Model)
//     ↓
// JavaScript can now access and manipulate it!

// ```

// * DOM TREE

// document
// └── html
//     ├── head
//     │   └── title
//     └── body
//         ├── h1
//         ├── p
//         └── div
//             ├── h2
//             └── p


// querySelector     → first match only (single element)
// querySelectorAll  → all matches (NodeList - like an array!)
// getElementById        → only works with IDs
// getElementsByClassName → only works with classes
// querySelector         → works with ANY CSS selector!
//                         (#id, .class, tag, div>p, etc.)

// * innerHTML vs textContent

// innerHTML    → renders HTML tags as actual HTML ✅
// textContent  → treats everything as plain TEXT
//                (shows <span> as literal text, not HTML!)

// ? NOTE: 
// innerHTML    → renders HTML tags as actual HTML ✅
// textContent  → treats everything as plain TEXT
//                (shows <span> as literal text, not HTML!)

// ? 📦 Part 4 — Changing Attributes
// Attributes are things like src, href, id, class, placeholder etc.
// Type this in script.js:

