
/*  Array with the different legal plays for the game */
const choices = ['Rock', 'Paper', 'Scissors'];


/* Function that retrieves the computer choice */
function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
};



/* Function that plays a single round of 'Rock Paper Scissors' */
function playRound(playerSelection, computerSelection){

    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    
    //console.log(player,computer);

    if(player===computer){
        
        //return 'Its a Tie!!!';
        return 0;

    } else if(player==='rock' && computer==='paper'){

        //return 'You lose! Paper beats Rock';
        return -1;

    }else if(player==='paper' && computer==='scissors'){
        
        //return 'You lose! Scissors beats Paper';
        return -1;

    }else if(player==='scissors' && computer==='rock'){
        
        //return 'You lose! Rock beats Scissors';
        return -1;

    }else if(player==='paper' && computer==='rock'){
        
        //return 'You win! Paper beats Rock';
        return 1;

    }else if(player==='scissors' && computer==='paper'){
        
        //return 'You win! Scissors beats Paper';
        return 1;

    }else if(player==='rock' && computer==='scissors'){
        
        //return 'You win! Rock beats Scissors';
        return 1;

    }
    
}

// Test:

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));


function game(){
    
    let playerScore=0;
    let computerScore=0;

    for(let i=0; i<5; i++){
        let play = prompt("Enter - Rock, Paper or Scissors:")
        let playResult = playRound(play, getComputerChoice())
        
        console.log(playResult);

        if(playResult===1){
            playerScore+=1;
        }else if(playResult===-1){
            computerScore+=1;
        }
    }

    if(playerScore===computerScore){
        
        return "It's a tie!";

    }else if(playerScore>computerScore){
        
        return "You're the winner!";
    
    }else{
    
        return "You lost";
    
    }
}

// console.log(game());
var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("player-score").innerHTML = clicks;
};



const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', onClick);
});