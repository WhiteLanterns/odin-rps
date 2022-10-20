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
    if ((playerSelection.toUpperCase() === "ROCK" && computerSelection === "PAPER") || (playerSelection.toUpperCase() === "PAPER" && computerSelection === "SCISSORS") || (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "ROCK")) {
        return 0
    } else if (playerSelection.toUpperCase() === computerSelection) {
        return 1
    } else {
        return 2
    }
}

const btns = document.querySelectorAll('.btn-container');
let score = 0;
const scoreContainer = document.querySelector('.score-container');
const gameFeedback = document.querySelector('#game-feedback');
const gameText = document.createElement('h3');
const scoreDisplay = document.createElement('p');

gameText.textContent = "Click a button to play!";

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let playerChoice = event.srcElement.id
        let computerChoice = getComputerChoice()
        let result = playRound(playerChoice, computerChoice)
        if (result === 2) {
            score++
            gameText.textContent = ("YOU WON! " + playerChoice.toUpperCase() + " BEATS " + computerChoice + "!")
            gameFeedback.append(gameText)
        } else if (result === 1){
            gameText.textContent = ("IT'S A DRAW!")
            gameFeedback.append(gameText)
        } else {
            gameText.textContent = ("YOU LOSE! " + computerChoice + " BEATS " + playerChoice.toUpperCase() + "!")
            gameFeedback.append(gameText)
        }
        scoreDisplay.textContent = "Score: " + score.toString();
    });
});

scoreDisplay.textContent = "Score: " + score.toString();
scoreContainer.append(scoreDisplay)


// function game(){
//     let rounds = parseInt(prompt("How many rounds would you like to play? "))
//     let score = 0
//     for (let i = 0; i < rounds; i++){
//         let playerChoice = prompt("Rock, paper, or scissors? ")
//         let computerChoice = getComputerChoice()
//         result = playRound(playerChoice, computerChoice)
//         if (result === 2) {
//             score++
//             console.log ("YOU WON! " + playerChoice.toUpperCase() + " BEATS " + computerChoice + "!")
//         } else if (result === 1){
//             console.log ("IT'S A DRAW!")
//         } else {
//             console.log ("YOU LOSE! " + computerChoice + " BEATS " + playerChoice.toUpperCase() + "!")
//         }
//     }
//     return "YOUR FINAL SCORE WAS " + score
// })