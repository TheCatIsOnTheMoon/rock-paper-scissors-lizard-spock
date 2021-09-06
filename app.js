// setting the DOM ========================================

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const lizard_div = document.getElementById('lizard');
const spock_div = document.getElementById('spock');

//generate computer choices =======================================

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5); // randomize a number bwn 0 and 5 and round it down
    return choices[randomNumber];
}

//return what is happening with the game ===================================

function convertChoices(choice) { // for readability
    if (choice === 'rock') return 'Rock';
    if (choice === 'paper') return 'Paper';
    if (choice === 'scissors') return 'Scissors';
    if (choice === 'lizard') return 'Lizard';
    return 'Spock';
}

function win (userChoiceWin, computerChoiceLose) {
    const smallUserWord = 'user'.fontsize(2).sub();
    const smallCompWord = 'computer'.fontsize(2).sub();
    const userChoiceWin_div = document.getElementById(userChoiceWin);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertChoices(userChoiceWin)}${smallUserWord} beats ${convertChoices(computerChoiceLose)}${smallCompWord}. You win!`;
    // add a green glow to your choice for only 300 milisecond with:
    userChoiceWin_div.classList.add('green-glow');
    setTimeout(() => userChoiceWin_div.classList.remove('green-glow'), 300);
}

function lose (userChoiceLose, computerChoiceWin) {
    const smallUserWord = 'user'.fontsize(2).sub();
    const smallCompWord = 'computer'.fontsize(2).sub();
    const userChoiceLose_div = document.getElementById(userChoiceLose);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertChoices(userChoiceLose)}${smallUserWord} loses to ${convertChoices(computerChoiceWin)}${smallCompWord}. You lost.`;
    // add a red glow to your choice for only 300 milisecond with:
    userChoiceLose_div.classList.add('red-glow');
    setTimeout(() => userChoiceLose_div.classList.remove('red-glow'), 300);
}

function draw (userChoiceDraw, computerChoiceDraw) {
    const smallUserWord = 'user'.fontsize(2).sub();
    const smallCompWord = 'computer'.fontsize(2).sub();
    const userChoiceDraw_div = document.getElementById(userChoiceDraw);
    result_p.innerHTML = `${convertChoices(userChoiceDraw)}${smallUserWord} equals ${convertChoices(computerChoiceDraw)}${smallCompWord}. It's a draw...`;
    // add a grey glow to your choice for only 300 milisecond with:
    userChoiceDraw_div.classList.add('grey-glow');
    setTimeout(() => userChoiceDraw_div.classList.remove('grey-glow'), 300);
}

// actually the game =========================================

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        //user win situations
        case 'rockscissors':
        case 'rocklizard':
        case 'paperrock':
        case 'paperspock':
        case 'scissorspaper':
        case 'scissorslizard':
        case 'lizardspock':
        case 'lizardpaper':
        case 'spockscissors':
        case 'spockrock':
            win(userChoice, computerChoice);
            break;
        //computer win situations
        case 'rockpaper':
        case 'rockspock':
        case 'paperscissors':
        case 'paperlizard':
        case 'scissorsrock':
        case 'scissorsspock':
        case 'lizardrock':
        case 'lizardscissors':
        case 'spockpaper':
        case 'spocklizard':
            lose(userChoice, computerChoice);
            break;
        //equality
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
        case 'lizardlizard':
        case 'spockspock':
            draw(userChoice, computerChoice);
            break;
    }
}


//make buttons work ==================================================

function main() {
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissors_div.addEventListener('click', () => game('scissors'));
    lizard_div.addEventListener('click', () => game('lizard'));
    spock_div.addEventListener('click', () => game('spock'));
}

main();
