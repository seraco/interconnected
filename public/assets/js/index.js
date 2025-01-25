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

function getCardsContainer() {
  return document.getElementById("board");
}

function getCards() {
  return Array.from(document.querySelectorAll(".card-label"));
}

function getSelectedCards() {
  return getCards().filter((card) => card.firstChild.checked);
}

getSelectedCards().forEach((card) => card.classList.add("selected"));

getCardsContainer().addEventListener("input", inputHandler);

function handleSelected(input) {
  const card = input.parentNode;
  const checked = input.checked;
  if (!checked) {
    card.classList.remove("selected");
    return;
  }
  card.classList.add("selected");
}

function isWinningState() {
  const selectedCards = getSelectedCards();
  const areSameDifficulty = selectedCards.every((card) => {
    const firstValue = selectedCards[0].firstChild.value.toLowerCase();
    const value = card.firstChild.value.toLowerCase();
    return solution[value] === solution[firstValue];
  });
  return areSameDifficulty && selectedCards.length === 4;
}

function updateBoardAfterWinningMove() {
  const firstFourCards = getCards().slice(0, 4);
  const selectedCards = getSelectedCards();
  firstFourCards.forEach((card, idx) => {
    const sibling = selectedCards[idx].nextSibling;
    card.replaceWith(selectedCards[idx]);
    sibling.parentNode.insertBefore(card, sibling);
  });
}

function inputHandler(e) {
  console.log("Fired", e);
  handleSelected(e.target);
  if (isWinningState()) {
    console.log(isWinningState());
    updateBoardAfterWinningMove();
  }
}
