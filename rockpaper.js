let computerScore = 0;
let humanScore = 0;

function computerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1; //epistrefei random arithmo apo 1-3
    if(randomNumber == 1){
        console.log("Computer chose rock");
        return "rock";
    }  
    else if(randomNumber == 2){
        console.log("Computer chose paper");
        return "paper";
    }
    else if(randomNumber == 3){
        console.log("Computer chose scissors");
        return "scissors";
    }
};

function getHumanChoice(){
    let humanChoice = prompt("Choose: ").toLowerCase();
    if(humanChoice === "rock"){
        console.log("You chose rock");
        return "rock";
    }
    else if(humanChoice === "paper"){
        console.log("You chose paper");
        return "paper";
    }
    else if(humanChoice === "scissors"){
        console.log("You chose scissors");
        return "scissors";
    }
};

function round(computerChoice, getHumanChoice){
    if (computerChoice === getHumanChoice){
        return "Tie!";
    }
    if (computerChoice === "rock" && getHumanChoice === "paper"){
        humanScore++;
        return "You win! Paper beats rock!";
    }
    if(computerChoice === "rock" && getHumanChoice === "scissors"){
        computerScore++;
        return "You lose! Rock beats scissors!";
    }
    if(computerChoice === "paper" && getHumanChoice === "rock"){
        computerScore++;
        return "You lose! Paper beats rock!";
    }
    if(computerChoice === "paper" && getHumanChoice === "scissors"){   
        humanScore++; 
        return "You win! Scissors beats paper!";
    }
    if(computerChoice === "scissors" && getHumanChoice === "paper"){
        computerScore++;
        return "You lose! Scissors beats paper!";
    }
    if (computerChoice === "scissors" && getHumanChoice === "rock"){
        humanScore++;
        return "You win! Rock beats scissors!";
    }
};

function playRound(){
    console.log(round (computerChoice(), getHumanChoice()) + "\nThe score is: " + humanScore, +computerScore);
}


function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if(humanScore > computerScore){
        console.log("Congratulations. You win the game!");
    }
    else console.log("You lost. Better luck next time. :(");
}
playGame();


//playRound(); //an to kanw playRound(computerChoice) kai meta copy pase to computerChoice kanei refresh

