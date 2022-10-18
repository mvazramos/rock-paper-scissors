/*  Array with the different legal plays for the game */
const choices = ['Rock', 'Paper', 'Scissors'];

// paths for images to display computer plays
const computerImageSources={
    "rock":"./images/stone.png",
    "scissors":"./images/scissor.png",
    "paper":"./images/paper.png"
}


/*
    Object with all possible scenarios, except a tie;
*/
const scenarios = {
    'rock':{
        'paper':[-1, 'You lose! Paper beats Rock!','paper'],
        'scissors': [1, 'You win! Rock beats Scissors!','scissors']
    },
    'paper':{
        'rock':[1, 'You win! Paper beats Rock!','rock'],
        'scissors':[-1, 'You lose! Scissors beats Paper!','scissors']
    },
    'scissors':{
        'rock':[-1, 'You lose! Rock beats Scissors!','rock'],
        'paper':[1, 'You win! Scissors beats Paper!','paper']
    }
}

// game scores
let computerScore = 0;
let playerScore = 0;

// gets all buttons defined in the game
const buttons = document.querySelectorAll('button');


//  .forEach will iterate through each button
buttons.forEach((button) => {
    // and for each one will add an eventListener
    button.addEventListener('click', onClick);
});


function getComputerChoice() {
    /* Function that generates the computer choice */
    return choices[Math.floor(Math.random() * choices.length)];
};


function playRound(playerSelection, computerSelection) {
    /* Function that plays a single round of 'Rock Paper Scissors' */

    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    //console.log(player, computer);

    if (player === computer) {

        //return 'Its a Tie!!!';
        return [0, 'Its a Tie!!!',computer];

    } else{
        return scenarios[player][computer];
    }

}


function onClick() {

    let play = this.className;
    let computerPlay = getComputerChoice();
    let result = playRound(play, computerPlay);

    const computerPlayImage = document.getElementsByClassName('computer-play');

    if (result[0] === 0) {
        document.getElementsByClassName('result-message')[0].innerHTML = result[1];
    } else if (result[0] === 1) {
        playerScore += 1;
        document.getElementsByClassName('result-message')[0].innerHTML = result[1];
        document.getElementById("player-score").innerHTML = playerScore;
    } else {
        computerScore += 1;
        document.getElementsByClassName('result-message')[0].innerHTML = result[1];
        document.getElementById("computer-score").innerHTML = computerScore;
    }
    computerPlayImage[0].src=computerImageSources[result[2]];

};






