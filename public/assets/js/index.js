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

const selected = [];

function inputHandler(e) {
  console.log("Fired", e);
  const parent = e.target.parentElement;
  if (parent.classList.contains("lightseagreen")) {
    e.target.parentElement.classList.remove("lightseagreen");
    return;
  }
  e.target.parentElement.classList.add("lightseagreen");
}

const cards = document.querySelectorAll(".card-label");
cards.forEach((element) => {
  element.firstChild.addEventListener("input", inputHandler);
});
