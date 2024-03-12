// Global variables

const HAND_SIGNALS = ["rock", "paper", "scissors"];

let playerPoints = 0;
let computerPoints = 0;

// Get player and computer choices

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

// Show text

function showScoreBoard() {
  console.log(
    `Player points: ${playerPoints} - Computer points: ${computerPoints}\n`
  );
}

function showRoundResult(playerSelection, computerSelection, roundResult) {
  console.log(
    `\nPlayer: ${playerSelection} - Computer: ${computerSelection}\n\n${roundResult}\n\n`
  );
}

function showGameWinner() {
  let winner;

  if (playerPoints > computerPoints) winner = "Player wins the game!";
  else if (computerPoints > playerPoints) winner = "Computer wins the game!";
  else winner = "It's a tie!";

  console.log(winner);
}

// Game logic

function playRound(playerSelection, computerSelection) {
  let result;

  if (playerSelection === computerSelection) {
    playerPoints++;
    computerPoints++;
    result = "It's a tie.";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerPoints++;
    result = `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerPoints++;
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  return result;
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    showScoreBoard();
    const roundResult = playRound(playerSelection, computerSelection);
    showRoundResult(playerSelection, computerSelection, roundResult);
  }

  showScoreBoard();
  showGameWinner();
}

playGame();
