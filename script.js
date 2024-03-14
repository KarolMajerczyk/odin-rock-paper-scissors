// DOM elements

const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const score = document.querySelector("#score");

// Global variables

const HAND_SIGNALS = ["rock", "paper", "scissors"];

let playerPoints = 0;
let computerPoints = 0;

// Event listeners

for (const button of buttons) {
  button.addEventListener("click", () => {
    if (playerPoints !== 5 && computerPoints !== 5) {
      const computerSelection = getComputerChoice();
      const playerSelection = button.textContent.toLowerCase();

      const roundResult = playRound(playerSelection, computerSelection);
      showRoundResult(playerSelection, computerSelection, roundResult);

      showScoreBoard();
    } else {
      result.textContent = showGameWinner();
    }
  });
}

// Helper functions

function getComputerChoice() {
  const randomMove = Math.floor(Math.random() * 3);
  return HAND_SIGNALS[randomMove];
}

function showScoreBoard() {
  score.textContent = `Player points: ${playerPoints} - Computer points: ${computerPoints}`;
}

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

function showRoundResult(playerSelection, computerSelection, roundResult) {
  result.textContent = `Computer: ${computerSelection} ${roundResult}`;
}

function showGameWinner() {
  let winner;

  if (playerPoints > computerPoints) winner = "Player wins the game!";
  else if (computerPoints > playerPoints) winner = "Computer wins the game!";
  else winner = "It's a tie!";

  return winner;
}
