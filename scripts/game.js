// humanScore = 0;
//computerScore = 0;

let humanScore = 0;
let computerScore = 0;

// FUNCTION getComputerChoice
    // pick rock, paper or scissors using math.random
    // LOG choice

function getComputerChoice() {

    let getRandomNumber = Math.random();
    
    if(getRandomNumber <= 0.4) {
        console.log("rock");
    } else if (getRandomNumber <= 0.7) {
        console.log("paper");
    } else {
        console.log("scissors");
    }
}

getComputerChoice();

// FUNCTION getHumanChoice
    // PROMPT to get players choice, store in var
    // LOG choice

function getHumanChoice(){
    // If user is playing outside of browser in node.js then run this.
    try {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question("Pick: Rock, Paper or Scissors: ", choice => {
            console.log(`You picked ${choice}`);
            readline.close();
        });
    // If user is playing in browser run this.
    } catch {
        let humanChoice = prompt("Pick: Rock, Paper or Scissors: ");
        console.log(humanChoice);
    }
}

getHumanChoice();

// FUNCTION playRound(PARAM, PARAM)
    // define which object beats what
    // declare winner
    // LOG winner
    // incremement winners score


// AFTER THE ABOVE WORKS

// FUNCTION playGame
    // score variables moved here
    // playRound code moved here 

    // WHILE playedRounds less than or equal 5
        // IF tie
            // point to each
        // elif 
            // Test who wins
