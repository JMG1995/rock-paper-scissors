let computerWins = 0;
let playerWins = 0;
let gamesPlayed = 1;

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
  userSelection = prompt("Please choose Rock, Paper or Scissors:");
  userSelection = capitalize(userSelection);
  computerSelection = capitalize(computerSelection);

  if (userSelection == computerSelection) {
    gamesPlayed++;
    console.log(`You both rolled ${userSelection}! Try again`);
  } else if (
    (userSelection == "Rock" && computerSelection == "Scissors") ||
    (userSelection == "Paper" && computerSelection == "Rock") ||
    (userSelection == "Scissors" && computerSelection == "Paper")
  ) {
    gamesPlayed++;
    playerWins++;
    console.log(`You win! ${userSelection} beats ${computerSelection}`);
  } else {
    gamesPlayed++;
    computerWins++;
    console.log(`You lose! ${computerSelection} beats ${userSelection}`);
  }
}

// plays 5 rounds and keeps track of score
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(`Game ${gamesPlayed} of 5`);
    playRound();
  }
  if (playerWins > computerWins) {
    console.log(`You won ${playerWins} to ${computerWins}. Good job!`);
  } else if (computerWins > playerWins) {
    console.log(
      `You lost ${computerWins} to ${playerWins}. Better luck next time!`
    );
  } else {
    console.log("You drew with the computer. Try again!");
  }
}
