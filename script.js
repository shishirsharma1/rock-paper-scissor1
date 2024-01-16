/*CONSTANTS*/
const choices = ["ROCK", "PAPER", "SCISSOR"]


function getComputerChoice(){
    random = Math.floor(Math.random()*3);
    return choices[random];

}

