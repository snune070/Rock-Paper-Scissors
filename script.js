let computerCount = 0;
let playerCount = 0;


const myButton = document.querySelectorAll('button');

for (let myButtonElement of myButton) {
    myButtonElement.addEventListener('click', function () {
        let choice = document.getElementById(this.id);
        myButtonElement = choice.id;
        playRound(myButtonElement, getComputerChoice());

    })
}

function playRound(playerInput, computerInput){

    let playerScore = document.querySelector('.playerScore')
    let computerScore = document.querySelector('.computerScore')

    if(playerInput === "rock" && computerInput === "paper"){
        computerCount++;
        computerScore.innerText = `${computerCount}`;
    } else if(playerInput === "rock" && computerInput === "scissors"){
        playerCount++;
        playerScore.innerText = `${playerCount}`;
        return console.log("You WIN!, Rock beats scissors");
    } else if(playerInput === "rock" && computerInput === "rock") {
        return console.log("Its a tie, you both picked rock")
    } else if(playerInput === "paper" && computerInput === "rock") {
        playerCount++;
        playerScore.innerText = `${playerCount}`;
        return console.log("You WIN! Paper beats rock");
    } else if(playerInput === "paper" && computerInput === "scissors"){
        computerCount++;
        computerScore.innerText = `${computerCount}`;
        return console.log("AW You Lose! Scissors beats Paper");
    } else if(playerInput === "paper" && computerInput === "paper"){
        return console.log("Its a TIE! You both picked paper");
    } else if(playerInput === "scissors" && computerInput === "rock"){
        computerCount++;
        computerScore.innerText = `${computerCount}`;
        return console.log("You lose, rock beats scissors");
    } else if(playerInput === "scissors" && computerInput === "paper") {
        playerCount++;
        playerScore.innerText = `${playerCount}`;
        return console.log("You Win! Scissors beats Paper");
    } else if(playerInput === "scissors" && computerInput === "scissors") {
        return console.log("Its a tie! you both picked scissors");
    } else {
        return console.log("That's not a proper input");
    }
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

