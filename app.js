
/*  Array with the different legal plays for the game */
const choices = ['Rock', 'Paper', 'Scissors'];


function getComputerChoice() {
    /* Function that generates the computer choice */
    return choices[Math.floor(Math.random() * choices.length)];
};


function playRound(playerSelection, computerSelection) {
    /* Function that plays a single round of 'Rock Paper Scissors' */

    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    console.log(player, computer);

    if (player === computer) {

        //return 'Its a Tie!!!';
        return [0, 'Its a Tie!!!'];

    } else if (player === 'rock' && computer === 'paper') {

        //return 'You lose! Paper beats Rock';
        return [-1, 'You lose! Paper beats Rock'];

    } else if (player === 'paper' && computer === 'scissors') {

        //return 'You lose! Scissors beats Paper';
        return [-1, 'You lose! Scissors beats Paper'];

    } else if (player === 'scissors' && computer === 'rock') {

        //return 'You lose! Rock beats Scissors';
        return [-1, 'You lose! Rock beats Scissors'];

    } else if (player === 'paper' && computer === 'rock') {

        //return 'You win! Paper beats Rock';
        return [1, 'You win! Paper beats Rock'];

    } else if (player === 'scissors' && computer === 'paper') {

        //return 'You win! Scissors beats Paper';
        return [1, 'You win! Scissors beats Paper'];

    } else if (player === 'rock' && computer === 'scissors') {

        //return 'You win! Rock beats Scissors';
        return [1, 'You win! Rock beats Scissors'];

    }

}

// Test:

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));


function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let play = prompt("Enter - Rock, Paper or Scissors:")
        let playResult = playRound(play, getComputerChoice())
        //console.log(playResult);

        if (playResult === 1) {
            playerScore += 1;
        } else if (playResult === -1) {
            computerScore += 1;
        }
    }

    if (playerScore === computerScore) {

        return "It's a tie!";

    } else if (playerScore > computerScore) {

        return "You're the winner!";

    } else {

        return "You lost";

    }
}


function onClick() {

    let play = this.className;
    let computerPlay = getComputerChoice();
    let result = playRound(play, computerPlay);

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
    console.log(result);
};



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