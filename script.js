let humanScore = 0;
let computerScore = 0;

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


function playRound() {
    let hum = prompt("Enter choice: ");
    let comp = getComputerChoice();

    console.log("PLAYROUND");
    if (hum.toLowerCase() != ("rock" || "paper" || "scissors" ) ) {
        console.log("re enter value! ")
        getHumanChoice();
    }

    if (hum.toLowerCase() === "rock") {
        if (comp === "scissors") {
            console.log("win: rock beats scissors!");
            humanScore += 1;
        }

        else if (comp === "paper") {
            console.log("loss: paper beats rock");
            computerScore += 1;
        }

        else {
            console.log("draw!");
        }
    }
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    alert("Player: " + humanScore + " Computer: " + computerScore);

}

playGame();