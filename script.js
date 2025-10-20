const rpsContainer = document.querySelectorAll('.rpsContainer');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');

const directionsContainer = document.querySelector('#directionsContainer');

const playAgainContainer = document.querySelector('#playAgainContainer');
const gameResult = document.createElement('p');
const playAgainButton = document.createElement('button');
playAgainButton.id = 'playAgain';

const humanPoints = document.querySelector('#humanScore');
const computerPoints = document.querySelector('#computerScore');
const hPoints = document.createElement('p');
const cPoints = document.createElement('p');
hPoints.textContent='0';
cPoints.textContent='0';
humanPoints.appendChild(hPoints);
computerPoints.appendChild(cPoints);

const roundResultContainer = document.querySelector('#roundResult');
const roundResult = document.createElement('p');

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

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

playAgainButton.addEventListener('click', () => {
    playGame();
})

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

const choiceImageWrapper = document.querySelector('#choiceImageWrapper');
const computerChoiceImage = document.createElement('span');

function updateComputerChoiceImage(choice){
    let c = choice;
    switch (c){
        case 'rock':
            computerChoiceImage.textContent = '✊';
            break;
        case 'paper':
            console.log('paper')
            computerChoiceImage.textContent = '✋';
            break;
        case 'scissors':
            console.log('scissors')
            computerChoiceImage.textContent = '✌️';
            break;
    }
    choiceImageWrapper.appendChild(computerChoiceImage);
}

function playRound(humanChoice, computerChoice){
    updateComputerChoiceImage(computerChoice);
    let winner = '';
    if (humanChoice == computerChoice){
        tieScore++;
        winner = "Tie";
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
    updateRoundResult(winner);
    updateRunningScore(humanScore, computerScore);
    checkScore();
}

function updateRoundResult(winner){
    let w = winner;
    if (w.toLowerCase() == 'tie'){
        roundResult.textContent = `It was a tie!`;
    } else {
        roundResult.textContent = `The ${w} won!`;
    }
    roundResultContainer.appendChild(roundResult);
}

function updateRunningScore(humanScore, computerScore){
    hPoints.textContent = `${humanScore}`;
    cPoints.textContent = `${computerScore}`;
}

function checkScore(){
    let gameWinner = '';
    if (humanScore == 5 || computerScore == 5){
        console.log('EQUAL FIVE');
        if (humanScore > computerScore){
            gameWinner = 'human';
        } else {
            gameWinner = 'computer';
        }
        gameWonMessage(gameWinner);   
        humanScore = 0;
        computerScore = 0;
        tieScore = 0;
    } 
}

function gameWonMessage(winner){
    rpsContainer.forEach((el)=>el.classList.add('hidden'));
    directionsContainer.classList.add('hidden');
    playAgainContainer.classList.remove('hidden');
    gameResult.textContent = `Game over! The winner is the ${winner}.`;
    playAgainButton.textContent = 'Play Again';
    playAgainContainer.appendChild(gameResult);
    playAgainContainer.appendChild(playAgainButton);
}

function playGame(){
    roundResult.textContent = '';
    computerChoiceImage.textContent = '';
    rpsContainer.forEach((el) => el.classList.remove('hidden'));
    directionsContainer.classList.remove('hidden');
    playAgainContainer.classList.add('hidden');
    updateRunningScore(0, 0);
}
