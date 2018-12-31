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

function playRound(x, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  x = prompt("Please choose Rock, Paper or Scissors:");

  if (x == computerSelection) {
    return `You both rolled ${x}! Try again`;
  } else if (
    (x == "rock" && computerSelection == "scissors") ||
    (x == "paper" && computerSelection == "rock") ||
    (x == "scissors" && computerSelection == "paper")
  ) {
    return `You win! ${x} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${x}`;
  }
}
