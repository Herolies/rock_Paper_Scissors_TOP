function getComputerChoice() {
  // Number random from 1 - 3
  const randomChoice = Math.floor(Math.random() * 3) + 1;

  if (randomChoice === 1) {
    return "rock";
  } else if (randomChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const pick = prompt("Scissors, Rock, or Paper!");
  const playerPick = pick.toLowerCase();

  if (
    playerPick === "rock" ||
    playerPick === "paper" ||
    playerPick === "scissors"
  ) {
    return playerPick;
  } else {
    return getHumanChoice();
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("It's a tie!");
    } else if (computerChoice === "paper") {
      console.log("You lose the round!");
      computerScore++;
    } else {
      console.log("You won the round!");
      humanScore++;
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "paper") {
      console.log("It's a tie!");
    } else if (computerChoice === "scissors") {
      console.log("You lose the round!");
      computerScore++;
    } else {
      console.log("You won the round!");
      humanScore++;
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "scissors") {
      console.log("It's a tie!");
    } else if (computerChoice === "rock") {
      console.log("You lose the round!");
      computerScore++;
    } else {
      console.log("You won the round!");
      humanScore++;
    }
  }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {
  const roundsToPlay = 5;
  let games = 0;

  while (games < roundsToPlay) {
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    games++;
  }
  if (humanScore > computerScore) console.log("You Won!");
  else {
    console.log("You lost!");
  }
}
