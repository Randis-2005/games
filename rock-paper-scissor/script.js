const scissor = document.querySelector(".btn-scissor");
const rock = document.querySelector(".btn-rock");
const paper = document.querySelector(".btn-paper");
const status = document.querySelector("#status");

let score = 0;

let elementList = ["scissor", "rock", "paper"];
// generates a random element from the giver list elementList
let computerChoice = elementList[Math.floor(Math.random() * elementList.length)];
// console.log(computerChoice);

scissor.addEventListener("click", scissorSelected);
rock.addEventListener("click", rockSelected);
paper.addEventListener("click", paperSelected);

// Winning conditions
// s > p
// p > r
// r > s

function scissorSelected() {
    if (computerChoice === "paper") {
        status.innerHTML = `You Won`;
        score += 1;
    } else if (computerChoice === "scissor") { 
        status.innerHTML = `Tied`;
        score += 0.5
    } else {   
        status.innerHTML = `You Lose`;
    }

}

function rockSelected() {
    if (computerChoice === "scissor") {
        status.innerHTML = `You Won`;
        score += 1;
    } else if (computerChoice === "rock") { 
        status.innerHTML = `Tied`;
        score += 0.5
    } else {
        status.innerHTML = `You Lose`;
    }
  
}

function paperSelected() {
    if (computerChoice === "rock") {
        status.innerHTML = `You Won`;
        score += 1;
    } else if (computerChoice === "paper") {
        status.innerHTML = `Tied`;
        score += 0.5;
    } else {
        status.innerHTML = `You Lose`;
    }
    
}


