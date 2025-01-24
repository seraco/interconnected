const solution = {
  first: "easy",
  second: "medium",
  third: "hard",
  fourth: "hardest",
  fifth: "easy",
  sixth: "medium",
  seventh: "hard",
  eighth: "hardest",
  nineth: "easy",
  tenth: "medium",
  eleventh: "hard",
  twelveth: "hardest",
  thirteenth: "easy",
  fourteenth: "medium",
  fifteenth: "hard",
  sixteenth: "hardest",
};

function getCards() {
  return document.querySelectorAll(".card-label");
}

function updateCardsBackground() {}

function inputHandler(e) {
  console.log("Fired", e);
  const parent = e.target.parentElement;
  const checked = e.target.checked;
  if (!checked) {
    parent.classList.remove("lightseagreen");
    return;
  }
  parent.classList.add("lightseagreen");
}

getCards().forEach((element) => {
  const child = element.firstChild;
  if (child.checked) element.classList.add("lightseagreen");
  child.addEventListener("input", inputHandler);
});
