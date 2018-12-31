const playerSelection = "paper";
const computerSelection = computerPlay().toLowerCase();

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

function playRound(x, y) {
  if (x == y) {
    return `You both rolled ${x}! Try again`;
  } else if (
    (x == "rock" && y == "scissors") ||
    (x == "paper" && y == "rock") ||
    (x == "scissors" && y == "paper")
  ) {
    return `You win! ${x} beats ${y}`;
  } else {
    return `You lose! ${y} beats ${x}`;
  }
}

console.log(playRound(playerSelection, computerSelection));
