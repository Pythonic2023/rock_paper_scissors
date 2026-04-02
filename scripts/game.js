// humanScore = 0;
//computerScore = 0;

let humanScore = 0;
let computerScore = 0;


// FUNCTION getComputerChoice
    // pick rock, paper or scissors using math.random
    // LOG choice

function getComputerChoice() {

    let getRandomNumber = Math.random();
    
    if(getRandomNumber <= 0.33) {
        return "rock";
    } else if (getRandomNumber <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// FUNCTION getHumanChoice
    // PROMPT to get players choice, store in var
    // LOG choice

function getHumanChoice(){
    let humanChoice = prompt("Pick: Rock, Paper or Scissors: ");
    return humanChoice;
}

// FUNCTION playRound(PARAM, PARAM)
    // define which object beats what
    // declare winner
    // LOG winner
    // incremement winners score


function playRound(computerSelection, humanSelection) {
    if(computerSelection === "rock" && humanSelection === "scissors"){
        console.log("computer won")
        computerScore += 1;
        console.log(`computer score: ${computerScore}`);
    } else if(computerSelection === "scissors" && humanSelection === "paper"){
        console.log("computer won");
        computerScore += 1;
        console.log(`computer score: ${computerScore}`);
    } else if(computerSelection === "paper" && humanSelection === "rock"){
        console.log("computer won");
        computerScore += 1;
        console.log(`computer score: ${computerScore}`);
    } else {
        console.log("human won");
        humanScore += 1;
        console.log(`human score: ${humanScore}`);
    }
}

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);
// AFTER THE ABOVE WORKS

// FUNCTION playGame
    // score variables moved here
    // playRound code moved here 

    // WHILE playedRounds less than or equal 5
        // IF tie
            // point to each
        // elif 
            // Test who wins
