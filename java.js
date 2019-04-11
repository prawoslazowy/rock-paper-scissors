const array = ['rock', 'paper', 'scissors'];
function computerPlay() {
    let randSelection = array[Math.floor(Math.random()*3)];
    return randSelection;
    
}
const playerSelecion = prompt("What you choose? Rock, paper or scissors?").toLowerCase();
const computerSelection = computerPlay();
console.log(computerSelection);
document.write(computerSelection);
document.write(playerSelecion);