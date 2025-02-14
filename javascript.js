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
    } else (computerChoice === 2) {
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
plays a single round
increments the round winner’s score
logs a winner announcement
*/

