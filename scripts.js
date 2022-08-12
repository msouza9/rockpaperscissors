/* Javascript! */

let choose= document.querySelector('#choose');
choose.addEventListener("click", getPlayerChoice);

let comp= document.querySelector('#comp');
comp.addEventListener("click", getComputerChoice);

let play= document.querySelector('#play');
play.addEventListener("click", game);


function getComputerChoice() {

    let num = Math.floor(Math.random() * 3);

    if(num == 0) {
        return "rock";
    }

    else if(num == 1) {
        return "paper";
    }

    else if(num == 2) {
        return "scissors";
    }   
}

function getPlayerChoice() {
    let input = prompt("Rock, Paper, or Scissors?");
    let lwrInput = input.toLowerCase();

        if(lwrInput == "rock") {
            return "rock";
        }
        else if(lwrInput == "paper") {
            return "paper";
        }
        else if(lwrInput == "scissors") {
            return "scissors";
        }
        else {
            console.log("I don't understand! Please choose rock, paper, or scissors");
            getPlayerChoice();
        }
    }


function playRound(choiceC, choiceP) {
 
    if(choiceC === choiceP) {
        return "tie";
    }
    else if(choiceP === "rock" && choiceC === "scissor" ||
    choiceP === "paper" && choiceC === "rock" || choiceP === "scissors" && choiceC === "paper") {
        return "player";
    }
    else {
        return "computer";
    }
}

function game() {
    let pWins = 0;
    let cWins = 0;

    for (let i = 0; i < 5; i++) {
    const compChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();

    const winner = playRound(compChoice,playerChoice);
    
    if (winner == "player") {
        pWins = pWins + 1;
    }
    else if (winner == "computer") {
        cWins = cWins + 1;
    }
    else if (winner == "tie") {
        console.log("Issa tie!")
    }
    else {
        console.log("Something weird happened here");
    }

    console.log("Player has " + pWins + " wins.");
    console.log("Computer has " + cWins + " wins.");

    }

    if(pWins > cWins) {
        alert("Player has won!");
    }
    else if(cWins > pWins) {
        alert("Computer has won :(");
    }
    else if(cWins === pWins) {
        alert("It is a tie!");
    }
    else {
        alert("I don't quite understand what happened here!");
    }
}
