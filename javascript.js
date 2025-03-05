let computerChoice;
let humanChoice;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return computerChoice = "rock";
    } else if (computerChoice === 1) {
        return computerChoice = "paper";
    } else { (computerChoice === 2) 
        return computerChoice = "scissors";
    }
}

const btn = document.querySelectorAll("button");
btn.forEach(button => {
    button.addEventListener('click', (event) => {
        humanChoice = event.target.id;
        playRound(humanChoice, getComputerChoice());
    });
});

function playRound(humanChoice, computerChoice) {
    choiceContent.textContent = `You chose ${humanChoice}. The computer chose ${computerChoice}.`;
    console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`);

    if (humanChoice == "rock" && computerChoice == "scissors" 
        || humanChoice == "scissors" && computerChoice == "paper"
        || humanChoice == "paper" && computerChoice == "rock") {
        ++humanScore;
        winnerContent.textContent = 'You won this round!';
        console.log('You won this round!');
    } else if (computerChoice == "rock" && humanChoice == "scissors" 
        || computerChoice == "scissors" && humanChoice == "paper"
        || computerChoice == "paper" && humanChoice == "rock") {
        ++computerScore;
        winnerContent.textContent = 'You lost this round!';
        console.log('You lost this round!');
    } else { (computerChoice == humanChoice) 
        winnerContent.textContent = "It's a tie!";
        console.log("It's a tie!");
    }

    scoreContent.textContent = `Your Score: ${humanScore}\nComputer's Score: ${computerScore}`;
    console.log(`Your Score: ${humanScore}\nComputer's Score: ${computerScore}\n\n`);
    playGame();
}

function playGame() {
    if (humanScore + computerScore >= 5) {
        if (computerScore === humanScore) {
            winnerContent.textContent = 'Good effort! You tied the game!';
            console.log('Good effort! You tied the game!');
        } else if (computerScore > humanScore) {
            winnerContent.textContent = 'So sad! You lost the game!';
            console.log('So sad! You lost the game!');
        } else { (humanScore > computerScore) 
            winnerContent.textContent = 'Congratulations! You won the game!';
            console.log('Congratulations! You won the game!');
        }
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    console.log(`\n* * * Begin New Game * * *\n\n`);
}

const title = document.querySelector("#title");
const titleContent = document.createElement("div");
titleContent.classList.add("titleContent");
titleContent.textContent = 'Choose your player!';
titleContent.style.cssText = "color: black; font-size: 50px;";
title.appendChild(titleContent);

const result = document.querySelector("#results");

const choiceContent = document.createElement("div");
choiceContent.classList.add("choiceContent");
choiceContent.style.cssText = "color: navy; font-size: 25px;";
result.appendChild(choiceContent);

const winnerContent = document.createElement("div");
winnerContent.classList.add("winnerContent");
winnerContent.style.cssText = "color: red; font-size: 25px;";
result.appendChild(winnerContent);

const scoreContent = document.createElement("div");
scoreContent.classList.add("scoreContent");
scoreContent.style.cssText = "color: black; font-size: 25px;";
result.appendChild(scoreContent);