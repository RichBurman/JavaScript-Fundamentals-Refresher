const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log(`Must be either 'rock', 'paper' or 'scissors'`);
  }
};

// getUserChoice('rock');

const getComputerChoice = () => {
  const num = Math.floor(Math.random() * 3);

  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Game was a tie";
  }

  if (userChoice === "bomb") {
    return "User wins!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      return "User wins!";
    } else if (computerChoice === "paper") {
      return "Computer wins!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins!";
    } else if (computerChoice === "rock") {
      return "User wins!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "User wins!";
    } else if (computerChoice === "rock") {
      return "Computer wins!";
    }
  }
};

// console.log(determineWinner('rock', 'paper'))

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  console.log(userChoice);

  const computerChoice = getComputerChoice();
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
