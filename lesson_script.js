// Flip card interaction
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

// Mini quiz logic with clear layout
const optionButtons = document.querySelectorAll(".options button");
const feedback = document.getElementById("activity-feedback");
const nextButton = document.getElementById("next-button");
const applySpeech = document.getElementById("apply-speech");

// Audio feedback
const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");

let correctAnswerSelected = false;

optionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isCorrect = button.getAttribute("data-correct") === "true";

    if (isCorrect) {
      feedback.textContent = "🎉 Correct! Great job!";
      feedback.style.color = "green";
      applySpeech.textContent = "Awesome work! Let’s go to the next page!";
      correctSound.play();
      correctAnswerSelected = true;
      nextButton.style.display = "inline-block";
    } else {
      feedback.textContent = "❌ Oops! Try again.";
      feedback.style.color = "red";
      applySpeech.textContent = "Oops! Let’s try again. You got this!";
      wrongSound.play();
      correctAnswerSelected = false;
      nextButton.style.display = "none";
    }
  });
});

// Add top navigation with image buttons
const navBar = document.createElement("div");
navBar.classList.add("top-nav");
navBar.innerHTML = `
  <img src="home.png" alt="Home" class="nav-button" data-target="home.html">
  <img src="help.png" alt="Help" class="nav-button" data-target="help.html">
`;
document.body.insertBefore(navBar, document.body.firstChild);

const navButtons = document.querySelectorAll(".nav-button");
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    window.location.href = target;
  });
});
