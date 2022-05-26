function computerPlay() {
    result = (Math.floor(Math.random() * 3)) + 1;
    switch (result) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
        default:
            break;
    }
}

 function playRound (playerSelection, computerSelection) {
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