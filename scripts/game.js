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

function getHumanChoice(){
    let humanChoice = prompt("Pick: Rock, Paper or Scissors: ");
    return humanChoice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let keepGoing = true;
    let counter = 0;

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
    
    while(keepGoing){
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);
        counter += 1
        if(counter === 5){
            keepGoing = false;
        }
    }
}

playGame();