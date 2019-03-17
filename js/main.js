let computerWins = 0;
let playerWins = 0;

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
  if (userSelection == computerSelection) {
    console.log(`You both rolled ${userSelection}! Try again`);
  } else if (
    (userSelection == "Rock" && computerSelection == "Scissors") ||
    (userSelection == "Paper" && computerSelection == "Rock") ||
    (userSelection == "Scissors" && computerSelection == "Paper")
  ) {
    playerWins++;
    console.log(`You win! ${userSelection} beats ${computerSelection}`);
  } else if (
    (userSelection == "Scissors" && computerSelection == "Rock") ||
    (userSelection == "Rock" && computerSelection == "Paper") ||
    (userSelection == "Paper" && computerSelection == "Scissors")
  ) {
    computerWins++;
    console.log(`You lose! ${computerSelection} beats ${userSelection}`);
  } else {
    console.log("this is the final else statement");
  }
}

getSelection();
