/* Javascript! */

let rock = document.querySelector('#rock');
rock.addEventListener("click", playerRock);

let paper = document.querySelector('#paper');
paper.addEventListener("click", playerPaper);

let scissor = document.querySelector('#scissor');
scissor.addEventListener("click", playerScissor);

let pWins = 0;
let cWins = 0;

let playerScore = document.getElementById("playerScore");
let ptx = playerScore.getContext("2d");
ptx.font = "30px Arial";
ptx.fillText(pWins, 225, 50);

let compScore = document.getElementById("compScore");
let ctx = compScore.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText(cWins, 225, 50);

document.getElementById("cWon").style.display = "none";
document.getElementById("pWon").style.display = "none";
document.getElementById("tie").style.display = "none";

/*choice text*/
document.getElementById("pRock").style.visibility = 'hidden';
document.getElementById("cRock").style.visibility = 'hidden';
document.getElementById("pPaper").style.visibility = 'hidden';
document.getElementById("cPaper").style.visibility = 'hidden';
document.getElementById("pScissor").style.visibility = 'hidden';
document.getElementById("cScissor").style.visibility = 'hidden';


function getComputerChoice() {
    document.getElementById("cRock").style.visibility = 'hidden';
    document.getElementById("cPaper").style.visibility = 'hidden';
    document.getElementById("cScissor").style.visibility = 'hidden';

    let num = Math.floor(Math.random() * 3);
    if(num == 0) {
        document.getElementById("cRock").style.visibility = 'visible';
        return "rock";
    }
    else if(num == 1) {
        document.getElementById("cPaper").style.visibility = 'visible';
        return "paper";
    }
    else if(num == 2) {
        document.getElementById("cScissor").style.visibility = 'visible';
        return "scissor";
    }   
}

function playerRock() {
    document.getElementById("pPaper").style.visibility = 'hidden';
    document.getElementById("pScissor").style.visibility = 'hidden';
    document.getElementById("pRock").style.visibility = 'visible';
    document.getElementById("tie").style.display = "none";
    const compChoice = getComputerChoice();
    const winner = playRound(compChoice,'rock');
    whoJuan(winner);
}

function playerPaper() {
    document.getElementById("pRock").style.visibility = 'hidden';
    document.getElementById("pScissor").style.visibility = 'hidden';
    document.getElementById("pPaper").style.visibility = 'visible';
    document.getElementById("tie").style.display = "none";
    const compChoice = getComputerChoice();
    const winner = playRound(compChoice,'paper');
    whoJuan(winner);
}

function playerScissor() {
    document.getElementById("pRock").style.visibility = 'hidden';
    document.getElementById("pPaper").style.visibility = 'hidden';
    document.getElementById("pScissor").style.visibility = 'visible';
    document.getElementById("tie").style.display = "none";
    const compChoice = getComputerChoice();
    const winner = playRound(compChoice,'scissor');
    whoJuan(winner); 
}

function whoJuan(winner) {
    if(pWins > 4) {
        console.log("Player has won!");
        document.getElementById("container").style.display = "none";
        document.getElementById("pWon").style.display = "block";
    }
    else if(cWins > 4) {
        console.log("Computer has won!");
        document.getElementById("container").style.display = "none";
        document.getElementById("cWon").style.display = "block";
    }
    else {
        if (winner == "player") {
            pWins = pWins + 1; 
        }
        else if (winner == "computer") {
            cWins = cWins + 1;
        }
        else if (winner == "tie") {
            console.log("Issa tie!")
            document.getElementById("tie").style.display = "block";
        }
        else {
            console.log("Something weird happened here");
        }
        console.log("Player has " + pWins + " wins.");
        console.log("Computer has " + cWins + " wins.");
        updateScore();
    }
}

function playRound(choiceC, choiceP) {
 
    if(choiceC === choiceP) {
        return "tie";
    }
    else if((choiceP === "rock" && choiceC === "scissor") ||
    (choiceP === "paper" && choiceC === "rock") || (choiceP === "scissor" && choiceC === "paper")) {
        return "player";
    }
    else {
        return "computer";
    }
}

function updateScore()  {
let playerScore = document.getElementById("playerScore");
let ptx = playerScore.getContext("2d");
ptx.clearRect(0, 0, playerScore.width, playerScore.height); //clear
ptx.font = "30px Arial";
ptx.fillText(pWins, 225, 50);

let compScore = document.getElementById("compScore");
let ctx = compScore.getContext("2d");
ctx.clearRect(0, 0, compScore.width, compScore.height); //clear
ctx.font = "30px Arial";
ctx.fillText(cWins, 225, 50);

}