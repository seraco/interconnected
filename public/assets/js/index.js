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

let totalCompletedCards = 0;

function getBoard() {
  return document.getElementById("board");
}

function getCards() {
  return Array.from(document.querySelectorAll(".card-label"));
}

function getSelectedCards() {
  return getCards().filter((card) => card.firstChild.checked);
}

getSelectedCards().forEach((card) => card.classList.add("selected"));

getBoard().addEventListener("input", inputHandler);

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

function disableTooManyCards() {
  const unselected = getCards().filter((card) => !card.firstChild.checked);
  unselected.forEach((card) => (card.firstChild.disabled = true));
}

function enableUnselectedCards() {
  const unselected = getCards().filter((card) => !card.firstChild.checked);
  unselected.forEach((card) => (card.firstChild.disabled = false));
}

function swapWinningCards() {
  const unselected = getCards()
    .slice(totalCompletedCards, totalCompletedCards + 4)
    .filter((card) => !card.firstChild.checked);
  const selected = getCards().filter(
    (card, idx) => card.firstChild.checked && idx >= totalCompletedCards + 4
  );
  unselected.forEach((card, idx) => {
    const sibling = selected[idx].nextSibling;
    card.replaceWith(selected[idx]);
    sibling.parentNode.insertBefore(card, sibling);
  });
}

function updateWinningCards() {
  getCards()
    .slice(totalCompletedCards, totalCompletedCards + 4)
    .forEach((card) => {
      card.firstChild.checked = false;
      card.classList.remove("selected");
      const value = card.firstChild.value.toLowerCase();
      card.classList.add(solution[value]);
      card.firstChild.disabled = true;
    });
  totalCompletedCards += 4;
}

function updateBoardAfterWinningMove() {
  swapWinningCards();
  updateWinningCards();
}

function inputHandler(e) {
  handleSelected(e.target);
  if (getSelectedCards().length < 4) {
    enableUnselectedCards();
    return;
  }
  disableTooManyCards();
  if (isWinningState()) {
    updateBoardAfterWinningMove();
  }
}
