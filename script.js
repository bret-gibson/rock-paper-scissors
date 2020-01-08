let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let choice = Math.floor(Math.random() * 3) + 1;
    let choiceResult;
    switch(choice){
        case 1: 
            choice == 1;
            choiceResult = "Rock";
            break;

        case 2: 
            choice == 2;
            choiceResult = "Paper";
            break;

        case 3: 
            choice == 3;
            choiceResult = "Scissors";
            break;
    }
    return choiceResult;
}

function playerChoice(){
    let playerPick = prompt("What will it be? Rock, Paper, or Scissors??")
    return playerPick;
}

function playRound(playerSelection, computerSelection){
    let roundResult;
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        return "Tie";
    } else if (player === "rock") {
        switch (computer) {
            case "paper":
                computerScore++;
                return "You Lose! Paper beats Rock";
                break;
            case "scissors":
                playerScore++;
                return "You Win! Rock beats Scissors";
                break;
        }
    } else if (player === "paper") {
        switch (computer) {
            case "scissors":
                computerScore++;
                return "You Lose! Scissors beat Rock";
                break;
            case "rock":
                playerScore++;
                return "You Win! Paper breats Rock";
                break;
        }
    } else if (player === "scissors") {
        switch (computer) {
            case "rock":
                computerScore++;
                return "You Lose! Rock beats Scissors";
                break;
            case "paper":
                playerScore++;
                return "You Win! Scissors beat Paper";
        }
    }
}

const scoreContainer = document.querySelector('#score-container');
let scoreDiv = document.createElement('div');
scoreContainer.appendChild(scoreDiv);

const resultContainer = document.querySelector('#result-container');
const finalResult = document.createElement('p');
const player = document.createElement('p');
const computer = document.createElement('p');
resultContainer.appendChild(player);
resultContainer.appendChild(computer);
resultContainer.appendChild(finalResult);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let playerSelection = button.textContent;
      let computerSelection = computerPlay();
      finalResult.textContent = playRound(playerSelection, computerSelection);
      scoreDiv.textContent = "Player: " + playerScore + " Computer: " + computerScore + "\n";
      player.textContent = "Player throws: " + playerSelection;
      computer.textContent = "Computer throws: " + computerSelection;
      if(playerScore == 5){
        alert("Player wins!!");
        playerScore = 0;
        computerScore = 0;
    }
    if(computerScore == 5){
        alert("Computer wins!!");
        computerScore = 0;
        playerScore = 0;
    }
    });
  });