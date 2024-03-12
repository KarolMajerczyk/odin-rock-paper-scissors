const HAND_SIGNALS = ["rock", "paper", "scissors"];

let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
  const randomMove = Math.floor(Math.random() * 3);
  return HAND_SIGNALS[randomMove];
}

function getPlayerChoice() {
  let playerSelection = prompt("Select: ").toLowerCase();

  while (!HAND_SIGNALS.includes(playerSelection)) {
    alert("Choose between: rock, paper, scissors");
    playerSelection = prompt("Select: ").toLowerCase();
  }

  return playerSelection;
}

function showRoundResult(playerSelection, computerSelection, roundResult) {
  console.log(
    `
        Player points: ${playerPoints} - Computer points: ${computerPoints}\n
        Player: ${playerSelection} - Computer: ${computerSelection}\n
        ${roundResult}
    `
  );
}

function determineGameWinner() {
  let winner;

  if (playerPoints > computerPoints) winner = "Player wins the game!";
  else if (computerPoints > playerPoints) winner = "Computer wins the game!";
  else winner = "It's a tie!";

  console.log(winner);
}

function playRound(playerSelection, computerSelection) {
  let resultMessage;

  if (playerSelection === computerSelection) {
    playerPoints++;
    computerPoints++;
    resultMessage = "It's a tie.";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerPoints++;
    resultMessage = `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerPoints++;
    resultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  return `${resultMessage}\n\n`;
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    const roundResult = playRound(playerSelection, computerSelection);

    showRoundResult(playerSelection, computerSelection, roundResult);
  }

  determineGameWinner();
}

playGame();
