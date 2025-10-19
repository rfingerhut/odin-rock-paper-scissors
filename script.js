const resultBox = document.querySelector("#results");
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');

const roundBox = document.querySelector('#round');
const roundNum = document.createElement('p');

const gameResultBox = document.querySelector('#gameResult');
const gameResult = document.createElement('p');
const playAgainButton = document.createElement('button');
playAgainButton.id = 'playAgain';
const buttonBox = document.querySelector('#choice');

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
const runningScore = document.querySelector('#runningScore');
const hScore = document.createElement('p');
const cScore = document.createElement('p');
const tScore = document.createElement('p');

const computerChoiceElement = document.createElement('p');

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    checkScore();
});

paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice())
});
scissorBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

function getComputerChoice(){
    let choice = Math.random();
    if (choice < 1/3){
        return "rock";
    } else if (choice > 1/3 && choice <= 2/3){
        return "scissors";
    } else {
        return "paper";
    }
}

function playRound(humanChoice, computerChoice){
    let winner = '';
    if (humanChoice == computerChoice){
        tieScore++;
    } else if (humanChoice == "rock" && computerChoice != "paper"){
        console.log("Human won.");
        humanScore++;
        winner = 'Human';
    } else if (humanChoice == "paper" && computerChoice != "scissors"){
        console.log("Human won.");
        humanScore++;
        winner = 'Human';
    } else if (humanChoice == "scissors" && computerChoice != "rock"){
        console.log("Human won.");
        humanScore++;
        winner = 'Human';
    } else {
        console.log("Computer won.");
        computerScore++;
        winner = 'Computer';
    }
    addComputerResult(computerChoice);
    updateRunningScore(humanScore, computerScore, tieScore);
}

// function playGame(){
//     playRound(getHumanChoice(), getComputerChoice());
// }


function addComputerResult(computerChoice){
    computerChoiceElement.textContent = `Computer chose ${computerChoice}.`;
    resultBox.appendChild(computerChoiceElement);
}

function updateRunningScore(humanScore, computerScore){
    hScore.textContent = `Your score = ${humanScore}`;
    cScore.textContent = `Computer's score = ${computerScore}`;
    tScore.textContent = `Ties = ${tieScore}`;
    runningScore.append(hScore, cScore, tScore);
    checkScore();
}

function checkScore(){
    if (humanScore == 5 || computerScore == 5){
        console.log('EQUAL FIVE');
        if (humanScore > computerScore){
            winner = 'human';
        } else {
            winner = 'computer';
        }
        gameWonMessage(winner);
        humanScore = 0;
        computerScore = 0;
        tieScore = 0;
    } 
}

function gameWonMessage(winner){
    resultBox.remove();
    buttonBox.remove();
    gameResult.textContent = `Game over! The winner is the ${winner}.`;
    playAgainButton.textContent = 'Play Again';
    gameResultBox.appendChild(gameResult);
    gameResultBox.appendChild(playAgainButton);
}

