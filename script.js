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

let user_score = 0;
let comp_score = 0;
let final_winner;
const userElement = document.createElement('p');
const compElement = document.createElement('p');
const winnerElement = document.createElement('p');
const compSelectionElement = document.createElement('p');
const buttons = document.querySelectorAll('.button')
console.log(buttons);
buttons.forEach(button => {
    button.addEventListener('click', () => {
        final_winner = null;
        winnerElement.textContent = "";
        let playerSelection = button.id;
        let computerSelection = getComputerSelection();
        const container = document.querySelector('.computer');
        compSelectionElement.textContent = `Computer: ${computerSelection}`;
        compSelectionElement.style.fontSize = '30px';
        compSelectionElement.style.padding = '5px';
        compSelectionElement.style.textAlign = 'center';
        container.appendChild(compSelectionElement);

        let winner = playRound(playerSelection, computerSelection)
        if (winner === "User") user_score++;
        else if (winner === "Computer") comp_score++;

        userElement.textContent = `Your score: ${user_score}`;
        userElement.style.padding = '5px';
        compElement.textContent = `Computer score: ${comp_score}`;
        compElement.style.padding = '5px';
        container.appendChild(userElement);
        container.appendChild(compElement);

        if (user_score === 5 && comp_score !== 5) final_winner = "You Won!";
        else if (comp_score === 5 && user_score !== 5) final_winner = "You Lost!";

        if (user_score === 5 || comp_score === 5) {
            if (user_score === 5) final_winner = "You Won!";
            else final_winner = "You Lost!";
            resetGame(); // Reset the game when someone wins
            winnerElement.textContent = final_winner;
            winnerElement.style.fontSize = '50px';
            winnerElement.style.color = 'black';
            winnerElement.style.fontFamily = 'Arial, Helvetica, sans-serif';
            winnerElement.style.textAlign = 'center';
            winnerElement.style.padding = '5px';
            container.appendChild(winnerElement);
        }

    })
});

function resetGame() {
    user_score = 0;
    comp_score = 0;
    userElement.textContent = `Your score: ${user_score}`;
    compElement.textContent = `Computer score: ${comp_score}`;
    compSelectionElement.textContent = "";
}

