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
let counter = 0;

function playGame(computerSelection, humanSelection){
    playRound(computerSelection, humanSelection);
    function playRound(computerSelection, humanSelection) {
        tie.textContent = "";
        if(computerSelection === humanSelection){
            tie.textContent = "It was a tie!";
            counter == counter;
        } else if(computerSelection === "Rock" && humanSelection === "Scissors"){
            computerScore += 1;
            displayComputer.textContent = `Computer Score: ${computerScore}`;
            counter += 1;
        } else if(computerSelection === "Scissors" && humanSelection === "Paper"){
            computerScore += 1;
            displayComputer.textContent = `Computer Score: ${computerScore}`;
            counter += 1;
        } else if(computerSelection === "Paper" && humanSelection === "Rock"){
            computerScore += 1;
            displayComputer.textContent = `Computer Score: ${computerScore}`;
            counter += 1;
        } else {
                humanScore += 1;
                displayHuman.textContent = `Human Score: ${humanScore}`;
                counter += 1;
            }
        }

        if(counter == 5){
            if(computerScore < humanScore){
                endGameScore.textContent = `Human won with the score: ${humanScore} of 5`;
            } else {
                endGameScore.textContent = `Computer won with the score: ${computerScore} of 5`;
            }
        }
}

let rpsDiv = document.querySelector('.rps-buttons');
const displayComputer = document.querySelector('.computer-score');
const displayHuman = document.querySelector('.human-score');
const endGameScore = document.querySelector('.end-game-score');
const tie = document.querySelector('.tie');

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