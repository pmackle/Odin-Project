let computerPoints = 0;
let userPoints = 0;

function game() {
  const rockButton = document.querySelector("#rock-button");
  const paperButton = document.querySelector("#paper-button");
  const scissorsButton = document.querySelector("#scissors-button");
  rockButton.addEventListener("click", playRound);
  paperButton.addEventListener("click", playRound);
  scissorsButton.addEventListener("click", playRound);
  const scoreDiv = document.createElement("div");
  let totalScore = document.createElement("p");
  let overallWinner = document.createElement("h1");
  let roundWinner = document.createElement("p");
  overallWinner.id = "overall-winner";
  totalScore.id = "total-score";
  roundWinner.id = "round-winner";
  scoreDiv.appendChild(totalScore);
  scoreDiv.appendChild(roundWinner);
  scoreDiv.appendChild(overallWinner);
  document.body.appendChild(scoreDiv);
  updateText(
    "total-score",
    `User:${userPoints} vs: Computer:${computerPoints}`
  );
}

function computerPlay() {
  let numOptions = 3;
  return Math.floor(Math.random() * numOptions);
}

function playRound(e) {
  let playerSelection, computerSelection;
  if (e.currentTarget.id == "rock-button") playerSelection = 0;
  else if (e.currentTarget.id == "paper-button") playerSelection = 1;
  else if (e.currentTarget.id == "scissors-button") playerSelection = 2;

  computerSelection = Math.floor(Math.random() * 3);

  if (playerSelection == computerSelection) {
    updateText("round-winner", "It's a tie!");
  } else if ((playerSelection + 1) % 3 == computerSelection) {
    updateText("round-winner", "The computer won this round :(");
    computerPoints++;
  } else {
    updateText("round-winner", "You won this round!");
    userPoints++;
  }
  showResults();
}

function updateText(id, text) {
  document.getElementById(id).innerText = text;
}

function showResults() {
  updateText(
    "total-score",
    `User:${userPoints} vs: Computer:${computerPoints}`
  );
  updateText("overall-winner", "");
  if (computerPoints == 5) {
    updateText("overall-winner", "Computer Wins Overall!");
    computerPoints = 0;
    userPoints = 0;
  }
  if (userPoints == 5) {
    updateText("overall-winner", "You Win Overall!");
    computerPoints = 0;
    userPoints = 0;
  }
}

game();
