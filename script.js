function computerPlay() {
    result = (Math.floor(Math.random() * 3)) + 1;
    switch (result) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

 function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a draw! Try again";
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === 'scissors') {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return "You Win! Paper beats Rock";
        } else if (computerSelection == 'scissors') {
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection == 'paper') {
            return "You Win! Scissors beats Paper";
        }
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    const answer = prompt("Rock, Paper, or Scissors?").toLowerCase();
    for (let i = 0; i < 5; i++) {
        if (answer === 'rock' || answer === 'paper' || answer === 'scissors') {
            alert(`Round ${[i + 1]}`);
            const thisGame = playRound(answer, computerPlay());
            if (thisGame.toString().includes('Win')) {
                playerScore++;
                alert (`Player: ${playerScore}, Computer: ${computerScore}`);
            } else if (thisGame.toString().includes('Lose')) {
                computerScore++;
                alert (`Player: ${playerScore}, Computer: ${computerScore}`);
            } else {
                alert (`Player: ${playerScore}, Computer: ${computerScore}`);
            }   
        } else {
            return "Please choose either Rock, Paper, or Scissors";
        }
    } 
        if (playerScore > computerScore) {
            return (`The game is over! You've won`);
    } else if (playerScore < computerScore) {
        return (`The game is over! You've lost`);
    } else {
        return (`The game is over! It's a tie`);
    }
}