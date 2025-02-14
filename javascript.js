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
    } else (computerChoice === 2)
        return computerChoice = "scissors";
}

console.log(getComputerChoice(computerChoice));