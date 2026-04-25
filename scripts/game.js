function getComputerChoice() {

    let getRandomNumber = Math.random();
    
    if(getRandomNumber <= 0.33) {
        return "Rock";
    } else if (getRandomNumber <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Pick: Rock, Paper or Scissors: ");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playGame(computerSelection, humanSelection){
    let keepGoing = true;
    let counter = 0;
    playRound(computerSelection, humanSelection);
    function playRound(computerSelection, humanSelection) {
        if(computerSelection === "Rock" && humanSelection === "Scissors"){
            computerScore += 1;
            displayComputer.textContent = `Computer Score: ${computerScore}`;
        } else if(computerSelection === "Scissors" && humanSelection === "Paper"){
            displayComputer.textContent = `Computer Score: ${computerScore}`;
        } else if(computerSelection === "Paper" && humanSelection === "Rock"){
            displayComputer.textContent = `Computer Score: ${computerScore}`;
        } else {
            humanScore += 1;
            displayHuman.textContent = `Human Score: ${humanScore}`;
            }
        }
    while(keepGoing){
        let computerSelection = getComputerChoice();
        let humanChoice = humanSelection;
        playRound(computerSelection, humanSelection);
        counter += 1
        if(counter === 5){
            keepGoing = false;
            if(computerScore > humanScore){
                endGameScore.textContent = `Computer won with a score of ${computerScore} out of 5`
            } else {
                endGameScore.textContent = `Human won with a score of ${humanScore} out of 5`;
            }
        }
    } 
}

let rpsDiv = document.querySelector('.rps-buttons');
const displayComputer = document.querySelector('.computer-score');
const displayHuman = document.querySelector('.human-score');
const endGameScore = document.querySelector('.end-game-score');

const rock = document.createElement('button');
rock.innerText = "Rock";
rpsDiv.appendChild(rock);

const paper = document.createElement('button');
paper.innerText = "Paper";
rpsDiv.appendChild(paper);

const scissors = document.createElement('button');
scissors.innerText = "Scissors";
rpsDiv.appendChild(scissors);

rpsDiv.addEventListener('click', (event) => {
    let computerChoice = getComputerChoice();
    let playerChoice = event.target.innerText;
    console.log(playerChoice);
    playGame(computerChoice, playerChoice);
})