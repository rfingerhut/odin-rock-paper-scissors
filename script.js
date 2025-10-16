const resultBox = document.querySelector("#results");
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
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

function getHumanChoice(){
    let choice = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let winner = '';
    console.log("Human chooses: " + humanChoice);
    console.log("Computer chooses: " + computerChoice);
    if (humanChoice == computerChoice){
        console.log("Tie!");
        winner = 'Tie!';
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
    addResult(winner);
}

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human score: ${humanScore}
    Computer score: ${computerScore}`);
}

function addResult(winner){
    const result = document.createElement('p');
    result.textContent = winner;
    resultBox.appendChild(result);
}

