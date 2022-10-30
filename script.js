
playRound(getPlayerChoice(), getComputerChoice());


function playRound(playerInput, computerInput){

    console.log(playerInput);
    console.log(computerInput);
    if(playerInput === "rock" && computerInput === "paper"){
        return console.log("Paper beats rock, you lose");
    } else if(playerInput === "rock" && computerInput === "scissors"){
        return console.log("You WIN!, Rock beats scissors");
    } else if(playerInput === "rock" && computerInput === "rock") {
        return console.log("Its a tie, you both picked rock")
    } else if(playerInput === "paper" && computerInput === "rock") {
        return console.log("You WIN! Paper beats rock");
    } else if(playerInput === "paper" && computerInput === "scissors"){
        return console.log("AW You Lose! Scissors beats Paper");
    } else if(playerInput === "paper" && computerInput === "paper"){
        return console.log("Its a TIE! You both picked paper");
    } else if(playerInput === "scissors" && computerInput === "rock"){
        return console.log("You lose, rock beats scissors");
    } else if(playerInput === "scissors" && computerInput === "paper") {
        return console.log("You Win! Scissors beats Paper");
    } else if(playerInput === "scissors" && computerInput === "scissors") {
        return console.log("Its a tie! you both picked scissors");
    } else {
        return console.log("Thats not a proper input");
    }
}

function getPlayerChoice(){
   return prompt("Rock, Paper, Or Scissors").toLowerCase();
    
}

function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 100) + 1;

    if(randomChoice <= 33){
        return "rock";
    } else if(randomChoice > 33 && randomChoice <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}