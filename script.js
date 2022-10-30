
getComputerChoice();
getPlayerChoice();

function playRound(playerInput, computerInput){
    
}

function getPlayerChoice(){
   return prompt("Rock, Paper, Or Scissors").toLowerCase();
    
}

function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 100) + 1;

    if(randomChoice <= 33){
        return console.log("rock");
    } else if(randomChoice > 33 && randomChoice <= 66) {
        return console.log("paper");
    } else {
        return console.log("scissors");
    }
}