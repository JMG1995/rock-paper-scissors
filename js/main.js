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

function capitalize(string) {
  let getCapitalLetter = string.charAt(0).toUpperCase();
  let getLowerString = string.slice(1).toLowerCase();

  return getCapitalLetter + getLowerString;
}

function playRound(userSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  userSelection = prompt("Please choose Rock, Paper or Scissors:");
  userSelection = capitalize(userSelection);
  computerSelection = capitalize(computerSelection);

  if (userSelection == computerSelection) {
    return `You both rolled ${userSelection}! Try again`;
  } else if (
    (userSelection == "Rock" && computerSelection == "Scissors") ||
    (userSelection == "Paper" && computerSelection == "Rock") ||
    (userSelection == "Scissors" && computerSelection == "Paper")
  ) {
    return `You win! ${userSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${userSelection}`;
  }
}
