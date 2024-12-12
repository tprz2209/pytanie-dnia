"use strict";

const rightAnswer = "answer-c";
const falseMessage = "Niestety, to błędna odpowiedź...";
const rightMessage = "Zgadza się! To prawidłowa odpowiedź.";
let isAnythingChosen = false;

////////// SELECTORS
// Answers
const overlay = document.querySelector(".overlay");
const answers = document.querySelectorAll("div.answer");
const footer = document.querySelector("footer");
const modalStart = document.querySelector(".modal-start");
const modalStartButton = document.querySelector(".modal-start-button");
const modalEnd = document.querySelector(".modal-end");
const modalClose = document.querySelector(".modal-close");

////////// EVENT LISTENERS
// Modal element
modalStartButton.addEventListener("click", function () {
  modalStart.classList.add("hidden");
  overlay.classList.add("hidden");
});

function showEndModal() {
  overlay.classList.remove("hidden");
  modalEnd.classList.remove("hidden");
  footer.textContent = "Do zobaczenia jutro! 😃";
}

// Answers elements
answers.forEach(function (item) {
  item.addEventListener("click", function () {
    answers.forEach(function (el) {
      el.classList.remove("answer-chosen");
    });
    item.classList.add("answer-chosen");
    footer.classList.remove("unclickable");
    isAnythingChosen = true;
  });
});

footer.addEventListener("click", function () {
  if (isAnythingChosen) {
    answers.forEach(function (item) {
      if (item.classList.contains(rightAnswer)) {
        item.classList.add("answer-correct");
      }

      if (
        item.classList.contains("answer-chosen") &&
        !item.classList.contains(rightAnswer)
      ) {
        item.classList.add("answer-wrong");
        footer.textContent = falseMessage;
      }
      item.classList.add("unclickable");
    });
    if (footer.textContent != falseMessage) {
      footer.textContent = rightMessage;
    }
    footer.classList.add("unclickable");
  }

  setTimeout(() => {
    showEndModal();
  }, 1500);
});

modalClose.addEventListener("click", function () {
  overlay.classList.add("hidden");
  modalEnd.classList.add("hidden");
});
