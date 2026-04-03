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
            computerScore += 1;
        } else if(computerSelection === "scissors" && humanSelection === "paper"){
            computerScore += 1;
        } else if(computerSelection === "paper" && humanSelection === "rock"){
            computerScore += 1;
        } else {
            humanScore += 1;
            }
        }
    
    while(keepGoing){
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);
        counter += 1
        if(counter === 5){
            keepGoing = false;
            if(computerScore > humanScore){
                console.log(`Computer won with a score of ${computerScore} out of 5`);
            } else {
                console.log(`Human won with a score of ${humanScore} out of 5`);
            }
        }
    }
}

playGame();