let computerPoints,
  userPoints = 0;

function game() {
  const numRounds = 5;
  const options = ["rock", "paper", "scissors"];
  let computerSelection, playerSelection, playerSelectionString;
  for (let i = 0; i < numRounds; i++) {
    playerSelectionString = prompt("Enter an option for Rock, Paper, Scissors");
    playerSelection = options.indexOf(playerSelectionString.toLowerCase());
    computerSelection = () => Math.floor(Math.random() * 3);
    playRound(playerSelection, computerSelection);
  }
  computerPoints > userPoints
    ? console.log("Computer Wins Overall!")
    : console.log("User Wins Overall!");
}

function computerPlay() {
  let numOptions = 3;
  return Math.floor(Math.random() * numOptions);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("It's a tie!");
  } else if (
    (playerSelection == 0 && computerSelection == 1) ||
    (playerSelection == 1 && computerSelection == 2) ||
    (playerSelection == 2 && computerSelection == 0)
  ) {
    console.log("The Computer Wins!");
    computerPoints++;
  } else {
    console.log("The User Wins!");
    userPoints++;
  }
}

game();
