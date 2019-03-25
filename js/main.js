var computerWins = 0;
var playerWins = 0;
let score = document.querySelector(".score");
score.innerHTML = `Please choose Rock, Paper or Scissors to begin. <br> You: ${playerWins} Computer: ${computerWins}`;

// run game functionality
getSelection();

function getSelection() {
  const button = document.querySelectorAll(".throw");
  button.forEach(button => {
    button.addEventListener("click", () => {
      userSelection = capitalize(button.id);
      playRound(userSelection);
    });
  });
}

// generate computers throw
function computerPlay() {
  let getThrow = Math.floor(Math.random() * 3);
  if (getThrow == 0) {
    return "Rock";
  } else if (getThrow == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// capitilize only the first letter so that the 'throws' appear as nouns
function capitalize(string) {
  let getCapitalLetter = string.charAt(0).toUpperCase();
  let getLowerString = string.slice(1).toLowerCase();

  return getCapitalLetter + getLowerString;
}

// determine who wins a single round
function playRound(userSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  computerSelection = capitalize(computerSelection);

  if (userSelection == computerSelection) {
    score.innerHTML = `You both rolled ${userSelection}, try again. <br> You: ${playerWins} Computer: ${computerWins}`;
  } else if (
    (userSelection == "Rock" && computerSelection == "Scissors") ||
    (userSelection == "Paper" && computerSelection == "Rock") ||
    (userSelection == "Scissors" && computerSelection == "Paper")
  ) {
    playerWins++;
    score.innerHTML = `You win! ${userSelection} beats ${computerSelection} <br> You: ${playerWins} Computer: ${computerWins}`;
  } else if (
    (userSelection == "Scissors" && computerSelection == "Rock") ||
    (userSelection == "Rock" && computerSelection == "Paper") ||
    (userSelection == "Paper" && computerSelection == "Scissors")
  ) {
    computerWins++;
    score.innerHTML = `You lose! ${computerSelection} beats ${userSelection} <br> You: ${playerWins} Computer: ${computerWins}`;
  }
  checkGameOver();
}

function checkGameOver() {
  const overlay = document.querySelector(".result");
  const result = document.querySelector(".result h4");
  if (playerWins === 5) {
    overlay.style.width = "100%";
    overlay.classList.add("win");
    result.textContent = "Congratulations - you win!";
    resetGame();
  } else if (computerWins === 5) {
    overlay.style.width = "100%";
    overlay.classList.add("lose");
    result.textContent = "Sorry - better luck next time!";
    resetGame();
  }
}

function resetGame() {
  const reset = document.querySelector(".result button");
  reset.addEventListener("click", () => {
    const overlay = document.querySelector(".result");
    playerWins = 0;
    computerWins = 0;
    score.innerHTML = `Please choose Rock, Paper or Scissors to begin. <br> You: ${playerWins} Computer: ${computerWins}`;
    overlay.style.width = "0";
  });
}
