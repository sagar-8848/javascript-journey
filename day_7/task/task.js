const userInp = document.querySelector("input");
const loading = document.querySelector(".loading");
const errorMsg = document.querySelector(".error");
const userContainer = document.querySelector("#userContainer");
const postDiv = document.querySelector("#posts");
// console.log(userInp);
// console.log(loading);
// console.log(errorMsg);

let allUsers = [];
async function getData() {
  try {
    loading.textContent = "Loading users...";
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    // console.log(data);
    allUsers = data;
    userContainer.innerHTML = "";
    showUsers(allUsers);
  } catch (err) {
    console.log(err);
  }
}

getData();

userInp.addEventListener("input", (e) => {
  let userSearch = e.target.value.toLowerCase();
  if (!userSearch) {
    userContainer.innerHTML = "";
    showUsers(allUsers);
    loading.textContent = "";
    return;
  }

  const filteredValue = allUsers.filter((curFilter) =>
    curFilter.name.toLowerCase().includes(userSearch),
  );
  if (filteredValue.length === 0) {
    loading.textContent = "No Result Found!";
  } else {
    loading.textContent = "";
  }
  userContainer.innerHTML = "";
  showUsers(filteredValue);
});

function showUsers(allUsers) {
  allUsers.forEach((curUser) => {
    const div = document.createElement("div");
    div.classList.add("card");

    const name = document.createElement("h1");
    name.classList.add("name");
    name.textContent = `${curUser.name}`;

    const email = document.createElement("h3");
    email.classList.add("email");
    email.textContent = `Email : ${curUser.email}`;

    const city = document.createElement("h3");
    city.classList.add("city");
    city.textContent = `City : ${curUser.address.city}`;

    const company_name = document.createElement("h4");
    company_name.classList.add("company_name");
    company_name.textContent = `Company : ${curUser.company.name}`;

    div.appendChild(name);
    div.appendChild(email);
    div.appendChild(city);
    div.appendChild(company_name);
    userContainer.appendChild(div);
    div.addEventListener("click", () => {
      fetchPosts(curUser.id);
      loading.textContent = ""
    });
  });
}

async function fetchPosts(userId) {
  try {
    postDiv.innerHTML = "Loading posts...";
    const postData = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );
    const data = await postData.json();
    console.log(data);

    postDiv.innerHTML = "";
    data.forEach((curPostData) => {
      const postDataContainer = document.createElement("div");
      postDataContainer.classList.add("postCard");
      postDataContainer.style.border = "2px solid red";

      // ? for the title

      const title = document.createElement("h1");
      title.classList.add("title");
      title.innerHTML = `${curPostData.title}`;

      const body = document.createElement("h2");
      body.classList.add("body");
      body.innerHTML = `${curPostData.body}`;

      postDataContainer.appendChild(title);
      postDataContainer.appendChild(body);
      postDiv.appendChild(postDataContainer);
    });
  } catch (err) {
    console.log(err);
  }
}
