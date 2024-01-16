/*CONSTANTS*/
let playerScore = 0;
let computerscore = 0;


/* FUNCTION TO GET PLAYER CHOICE*/
function getPlayerChoice(){
    let playerChoice = prompt("What is your choice");
    playerChoice = playerChoice.toUpperCase();
    return playerChoice;
}

/*FUNCTION TO GET COMPUTER CHOICE*/
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*2);
    switch (randomNumber) {
        case 0:
          return 'ROCK';
        case 1:
          return 'PAPER';
        case 2:
          return 'SCISSORS';
      }

}

/*PLAYS THE ROUNDS AND ADD THE SCORE*/
function playRound(computerSelection, playerSelection){

    if(playerSelection === 'ROCK' && computerSelection ==='PAPER' ||
       playerSelection == 'SCISSOR' && computerSelection =='ROCK' ||
       playerSelection == 'PAPER' && computerSelection =='SCISSOR'){
        computerscore++;
    }
    else if(playerSelection == 'ROCK' && computerSelection =='SCISSOR'||
            playerSelection == 'SCISSOR' && computerSelection =='PAPER' ||
            playerSelection == 'PAPER' && computerSelection =='ROCK'){
        playerScore++;
    }
    else if(playerSelection === computerSelection){
        
    }
    
}

/*FUNCTION THAT PLAYS THE GAME FOR 5 ROUNDS*/
function game(){
    for(let i = 1; i<=5; i++){
        let  playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        playRound(computerSelection, playerSelection);
    }

    if (computerscore > playerScore){
        console.log("You Lose");
    }
    else if(computerscore < playerScore){
        console.log("You Win!");
    }
    else if(computerscore === playerScore){
        console.log("tie");
    }
}

/*RUNS THE GAME */
game();