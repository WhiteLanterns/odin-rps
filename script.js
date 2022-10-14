function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    if (choice === 0) {
        return "ROCK"
    } else if (choice === 1) {
        return "PAPER"
    } else if (choice === 2) {
        return "SCISSORS"
    } else {
        return "Something has gone wrong"
    }
}

function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toUpperCase();
        if ((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
            return false
            return "You lose! " + computerSelection + " beats " + playerSelection + "!"
        } else {
            return true
            return "You won! " + playerSelection + " beats " + computerSelection + "!"
        }
    }
