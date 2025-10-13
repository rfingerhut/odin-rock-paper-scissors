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
    console.log("Human chooses: " + humanChoice);
    console.log("Computer chooses: " + computerChoice);
    if (humanChoice == computerChoice){
        console.log("Tie!")
        playRound(getHumanChoice(), getComputerChoice());
    } else if (humanChoice == "rock" && computerChoice != "paper"){
        console.log("Human won.");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice != "scissors"){
        console.log("Human won.");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice != "rock"){
        console.log("Human won.");
        humanScore++;
    } else {
        console.log("Computer won.");
        computerScore++;
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Human score: ${humanScore}
    Computer score: ${computerScore}`);
    
}

playGame();

