const resultBox = document.querySelector("#results");
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');

const roundBox = document.querySelector('#round');
const roundNum = document.createElement('p');



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

let humanScore = 0;
let computerScore = 0;
const runningScore = document.querySelector('#runningScore');
const hScore = document.createElement('p');
const cScore = document.createElement('p');

function updateRunningScore(humanScore, computerScore){
    hScore.textContent = `Your score: ${humanScore}`;
    cScore.textContent = `Computer's score: ${computerScore}`;
    runningScore.append(hScore, cScore);
}

function checkScore(){
    if (humanScore == 5 || computerScore == 5){
        if (humanScore > computerScore){
            winner = 'human';
        } else {
            winner = 'computer';
        }
        gameWonMessage(winner);
        // CHange to play again function.
        humanScore = 0;
        computerScore = 0;
    }
}

function playRound(humanChoice, computerChoice){
    let winner = '';
    console.log("Human chooses: " + humanChoice);
    console.log("Computer chooses: " + computerChoice);
    if (humanChoice == computerChoice){

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
    addResult(humanChoice, computerChoice, winner);
    updateRunningScore(humanScore, computerScore);
}

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
}

const result = document.createElement('p');

function addResult(humanChoice, computerChoice, winner){
    result.textContent = `You chose ${humanChoice}.
    Computer chose ${computerChoice}.
    The winner is ${winner}`;
    resultBox.appendChild(result);
}

function gameWonMessage(winner){
    result.textContent = `Game over! The winner is the ${winner}!`;
    resultBox.append(result);
}

