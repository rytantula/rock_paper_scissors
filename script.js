let roundResult = 0;
let playerScore = 0;
let computerScore = 0;
let roundCount = 1;

function computerPlay() {
    result = (Math.floor(Math.random() * 3)) + 1;
    switch (result) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function buttonCase(buttonName, signName) {
    const rockButton = document.querySelector('#rockButton');
    const paperButton = document.querySelector('#paperButton');
    const scissorsButton = document.querySelector('#scissorsButton');
    let resultsDiv = document.body.querySelector('#results');
    let newP = document.createElement('p');
    
    buttonName.addEventListener('click', function() {
        if (playerScore < 5 && computerScore < 5) {
            newP.innerHTML = game(signName);
            resultsDiv.replaceChildren(newP);
            console.log('ps   ' + playerScore + '   cs   ' + computerScore);
        } else if (playerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            roundCount = 1;
            newP.innerHTML = `The game is over! You've won`;
            resultsDiv.replaceChildren(newP);
        } else if (computerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            roundCount = 1;
            newP.innerHTML = `The game is over! You've lost`;
            resultsDiv.replaceChildren(newP);
        }
    });
}

function playerPlay() {
    buttonCase(rockButton, 'rock');
    buttonCase(paperButton, 'paper');
    buttonCase(scissorsButton, 'scissors');
}

function playRound(playerSelection, computerSelection) {
    roundResult = 0;
    if (playerSelection === computerSelection) {
        return "It's a draw! Try again";
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            roundResult--;
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === 'scissors') {
            roundResult++;
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            roundResult++;
            return "You Win! Paper beats Rock";
        } else if (computerSelection == 'scissors') {
            roundResult--;
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            roundResult--;
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection == 'paper') {
            roundResult++;
            return "You Win! Scissors beats Paper";
        }
    }
}

function game(playerChoice) {
    let scoreDiv = document.body.querySelector('#scoreboard');
    let scoreP = document.createElement('p');    
    let roundString = playRound(playerChoice, computerPlay());
    if (roundResult > 0) {
        playerScore++;
    } else if (roundResult < 0) {
        computerScore++;
    }
    scoreP.innerHTML = `Round: ${roundCount}<br>Player: ${playerScore}, Computer: ${computerScore}`;
    scoreDiv.replaceChildren(scoreP);
    roundCount++;
    return roundString;   
}

playerPlay();