const userInp = document.querySelector("input");
const addBtn = document.querySelector("button");
const cardCount = document.querySelector("p");
const cardContainer = document.querySelector("#card-container");

addBtn.addEventListener("click", () => {
  let text = userInp.value;

  if (!text) return;

  // ? create the card
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = text;
  cardContainer.appendChild(card);
  userInp.value = "";

  updateCount();
});

// * mouseover, mouseout, dblclick, contextMenu

// ? hanldeMouseover

function hanldeMouseover(e) {
  if (e.target.classList.contains("card")) {
    e.target.style.backgroundColor = "blue";
  }
}

// ? handle mouseout

function handleMouseout(e) {
  if (!e.target.classList.contains("card")) return;
  if (e.target.classList.contains("favourite")) {
    e.target.style.backgroundColor = "yellow";
  } else {
    e.target.style.backgroundColor = "";
  }
}

// ? handle dblclick

function hanldeDblclick(e) {
  console.log("dbl clicked");
  if (e.target.classList.contains("card")) {
    if (!e.target.classList.contains("favourite")) {
      e.target.classList.add("favourite");
    }
  }
}

// ? handle count
function updateCount() {
  let totalCards = document.querySelectorAll(".card").length;
  cardCount.textContent = `Total Cards : ${totalCards}`;
}
// ? hanlde contextMenu

function hanldeContextmenu(e) {
  console.log(e);

  e.preventDefault();

  if (e.target.classList.contains("card")) {
    e.target.remove();
    updateCount();
  }
}

// ! hanlde events

cardContainer.addEventListener("mouseover", hanldeMouseover);
cardContainer.addEventListener("mouseout", handleMouseout);
cardContainer.addEventListener("dblclick", hanldeDblclick);
cardContainer.addEventListener("contextmenu", hanldeContextmenu);
