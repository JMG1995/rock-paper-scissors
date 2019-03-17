let computerWins = 0;
let playerWins = 0;
let score = document.querySelector(".score");
score.innerHTML = `Please choose Rock, Paper or Scissors to begin. <br> You: ${playerWins} Computer: ${computerWins}`;

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

// determine which button is clicked
function getSelection() {
  const button = document.querySelectorAll("button");
  button.forEach(button => {
    button.addEventListener("click", () => {
      userSelection = capitalize(button.id);
      playRound(userSelection);
    });
  });
}

// determine who wins a single round
function playRound(userSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  computerSelection = capitalize(computerSelection);

  if (playerWins === 5) {
    const overlay = document.querySelector(".result");
    overlay.style.width = "100%";
    overlay.classList.add("win");
  } else if (computerWins === 5) {
    const overlay = document.querySelector(".result");
    overlay.style.width = "100%";
    overlay.classList.add("lose");
  } else if (userSelection == computerSelection) {
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
}

getSelection();
