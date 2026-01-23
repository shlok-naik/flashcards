const flashcard = document.getElementById("flashcard");
if (flashcard) {
  flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
  });
}

const addCardButton = document.getElementById("addCard");
if (addCardButton) {
  addCardButton.addEventListener("click", () => {
    window.location.href = "add-card.html";
  });
}

const closeButton = document.getElementById("closeButton");
if (closeButton) {
  closeButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
