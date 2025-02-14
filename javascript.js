/*
create function getComputerChoice
create three strings "rock" "paper" "scissors"
assign value 0-2
use math.floor on math.random * 2 to generate number between 0 and 2 
randomly return one string:
if computerChoice === rock, return "rock" .. else if .. else
test with console.log
*/

let computerChoice;

function getComputerChoice(computerChoice) {
    let rock = 0;
    let paper = 1;
    let scissors = 2;

    computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return computerChoice = "rock";
    } else if (computerChoice === 1) {
        return computerChoice = "paper";
    } else { (computerChoice === 2) 
        return computerChoice = "scissors";
    }
}

/*
create function getHumanChoice
prompt for string "rock" "paper" "scissors"
convert to lower case
if it doesnt match "rock" "paper" "scissors" prompt "try again"
else it does match, return string 
print with console.log
*/

let humanChoice;

function getHumanChoice(humanChoice) {
    humanChoice = prompt('Please enter one of the following: "rock", "paper", or "scissors":');
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock") {
        return humanChoice = "rock";
    } else if (humanChoice === "paper") {
        return humanChoice = "paper";
    } else if (humanChoice === "scissors") {
        return humanChoice = "scissors";
    } else {
        return prompt('Please enter a valid option.');
    }
}

let humanScore = 0;
let computerScore = 0;

/*
write a function that takes the human and computer player choices as arguments
log each choice
plays a single round
let rock > scissors, scissors > paper, paper > rock
if humanChoice === computerChoice, tie and no increment, print tie
else computerChoice > humanChoice, increment computer score, print "you lost this round"
else increment human score, print "you won this round"
*/

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice(humanChoice);
    computerChoice = getComputerChoice(computerChoice);
    console.log(`You chose ${humanChoice.toLowerCase()}. The computer chose ${computerChoice}.`);

    if (humanChoice == "rock" && computerChoice == "scissors" 
        || humanChoice == "scissors" && computerChoice == "paper"
        || humanChoice == "paper" && computerChoice == "rock") {
        ++humanScore;
        return console.log('You won this round!');
    } else if (computerChoice == "rock" && humanChoice == "scissors" 
        || computerChoice == "scissors" && humanChoice == "paper"
        || computerChoice == "paper" && humanChoice == "rock") {
        ++computerScore;
        return console.log('You lost this round!');
    } else { (computerChoice == humanChoice) 
        return console.log("It's a tie!");
    }
}

/*
Write a function named playGame that calls playRound 5 times
Logs the new score after each round
Compare scores
Declares a winner at the end
*/

playGame();

function playGame() {
    for (var i = 1; i < 6; i++) {
        playRound(i);
        console.log(`Your Score: ${humanScore}\nComputer's Score: ${computerScore}\n\n`);
    }    

    if (computerScore === humanScore) {
        return console.log('Good effort! You tied the game!');
    } else if (computerScore > humanScore) {
        return console.log('So sad! You lost the game!');
    } else { (humanScore > computerScore) 
        return console.log('Congratulations! You won the game!');
    }
}