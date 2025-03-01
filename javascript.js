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
    console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`);

    if (humanChoice == "rock" && computerChoice == "scissors" 
        || humanChoice == "scissors" && computerChoice == "paper"
        || humanChoice == "paper" && computerChoice == "rock") {
        ++humanScore;
        console.log('You won this round!');
    } else if (computerChoice == "rock" && humanChoice == "scissors" 
        || computerChoice == "scissors" && humanChoice == "paper"
        || computerChoice == "paper" && humanChoice == "rock") {
        ++computerScore;
        console.log('You lost this round!');
    } else { (computerChoice == humanChoice) 
        console.log("It's a tie!");
    }

    console.log(`Your Score: ${humanScore}\nComputer's Score: ${computerScore}\n\n`);
    playGame();
}

function playGame() {
    if (humanScore + computerScore >= 5) {
        if (computerScore === humanScore) {
            console.log('Good effort! You tied the game!');
        } else if (computerScore > humanScore) {
            console.log('So sad! You lost the game!');
        } else { (humanScore > computerScore) 
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