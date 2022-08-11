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
        console.log("I don't understand your input");
        return null;
    }
}

function playRound(choiceC, choiceP) {

    console.log(choiceC);
    console.log(choiceP);
 
    if(choiceC === choiceP) {
        console.log("Issa tie");
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
    for (let i = 0; i < 5; i++) {
    const compChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    const pWins = 0;
    const cWins = 0;

    const winner = playRound(compChoice,playerChoice);

    console.log(winner);
    
    if (winner == "player") {
        pWins = pWins++;
    }
    else if (winner == "computer") {
        cWins = cWins++;
    }
    else {
        console.log("Something weird happened here");
    }

    console.log("Player has " + pWins + " wins!");
    console.log("Computer has " + cWins + " wins.");

    }
}
