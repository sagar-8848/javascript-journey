const mainContainer = document.querySelector(".mainContainer");
const userInp = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  // ? gettng the value from the input directly and storing in the value var
  const value = userInp.value;

  // ? check if the input is empty

  if (value === "") return;

  // ? create to do
  const todo = document.createElement("li");
  todo.textContent = value;

  // ? create delete button

  const dltButton = document.createElement("button");
  dltButton.textContent = `Delete`;

  dltButton.addEventListener("click", () => {
    todo.remove();
  });

  // ? appending dltbtn to todo

  todo.appendChild(dltButton);
  ul.appendChild(todo);

  // ? after the input, clear the input

  userInp.value = "";
});
