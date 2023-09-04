function playRound(playerSelection, computerSelection) {
    let winner;
    console.log(`User: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
    if (playerSelection === computerSelection) {
        winner = "Tie"
        console.log("Tie");
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissor') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissor' && computerSelection === 'paper')
        ) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
            winner = "User";
        }
        else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
            winner = "Computer";
        }
    return winner;
}

function game() {
    let i = 0;
    let user_score = 0;
    let comp_score = 0;
    while (i < 5) {
        player = getPlayerSelection();
        computer = getComputerSelection();
        winner = playRound(player, computer);
        if (winner == "User") {
            user_score ++;
        }
        else if (winner == "Computer") {
            comp_score ++;
        }
        console.log(`Your Score: ${user_score}, Computer Score: ${comp_score} `)
        i++;
    }
    if (user_score > comp_score) {
        console.log(`User: ${user_score}, Computer: ${comp_score}, You Win!`)
    }
    else if (comp_score > user_score) {
        console.log(`User: ${user_score}, Computer: ${comp_score}, You Lose!`)
    }
    else {
        console.log(`User: ${user_score}, Computer: ${comp_score}, Tie!`)
    }
}
function getComputerSelection() {
    const options = ["Rock", "Paper", "Scissor"];
    randomSelect = Math.floor(Math.random()*3);
    return options[randomSelect].toLocaleLowerCase();
}

function getPlayerSelection() {
    let playerSelection = prompt("Choose Rock, Paper or Scissor!");
    const options = ["rock", "paper", "scissor"];
    while (!options.includes(playerSelection.toLowerCase())) {
        if (playerSelection === 'exit') {
            break; // Exit the loop
        }
    playerSelection = prompt("Incorrect choice, try again!");
    }
    return playerSelection.toLocaleLowerCase();
}


const computerSelection = getComputerSelection();
game();
