let humanScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector("#rock")
const scoreDisplay = document.querySelector(".Container .Score")
const resultDisplay = document.querySelector(".Container .Results")

function getComputerChoice() {
    let randomNum = Math.random();
    let compChoice;
    if (randomNum > 0.66) {
        compChoice = "rock";
    }
    else if (randomNum > 0.33) {
        compChoice = "scissors";
    }
    else {
        compChoice = "paper";
    }
    return compChoice;
}

function getHumanChoice() {
    let humChoice = prompt("Enter choice: ")
    console.log(humChoice);
    return humChoice;
}


function playRound(hum) {
    let comp = getComputerChoice();
    let result;

    console.log("PLAYROUND");
    if (hum.toLowerCase() != ("rock" || "paper" || "scissors" ) ) {
        console.log("re enter value! ")
        getHumanChoice();
    }

    if (hum.toLowerCase() === "rock") {
        if (comp === "scissors") {
            result = "win: rock beats scissors!"
            humanScore += 1;
        }

        else if (comp === "paper") {
            result = "loss: paper beats rock";
            computerScore += 1;
        }

        else {
            result = "draw!";
        }
    }

    scoreDisplay.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;
    resultDisplay.textContent = result;

    if (humanScore === 5) {
        resultDisplay.textContent = "You win";
        humanScore = 0;
        computerScore = 0;
    }

    else if (computerScore === 5) {
        resultDisplay.textContent = "Computer Wins";
        humanScore = 0;
        computerScore = 0;
    }


}

rockBtn.addEventListener("click", () => {playRound("rock")});
