/*CONSTANTS*/
const choices = ["ROCK", "PAPER", "SCISSOR"]
const playerSelection = 'ROCK';
let computerSelection = getComputerChoice();

function getPlayerChoice(){
    let playerChoice = prompt("What is your choice");
    playerChoice = playerChoice.toUpperCase();
    return playerChoice;
}

function getComputerChoice(){
    random = Math.floor(Math.random()*3);
    return choices[random];

}

function playRound(computerSelection, playerSelection){
    if(playerSelection == 'ROCK' && computerSelection =='PAPER'){
        console.log("You Lose! Paper beats Rock");
    }
    else if(playerSelection == 'ROCK' && computerSelection =='SCISSOR'){
        console.log("You Win! Rock beats Scissor");
    }
    else if(playerSelection == 'SCISSOR' && computerSelection =='PAPER'){
        console.log("You Win! Scissor beats Paper");
    }
    else if(playerSelection == 'SCISSOR' && computerSelection =='ROCK'){
        console.log("You lose! Rock beats Scissor");
    }
    else if(playerSelection == 'PAPER' && computerSelection =='ROCK'){
        console.log("You Win! Paper beats Rock");
    }
    else if(playerSelection == 'PAPER' && computerSelection =='SCISSOR'){
        console.log("You Lose! Scissor beats Paper");
    }
    else if(playerSelection == computerSelection){
        console.log("Tie");
    }
}