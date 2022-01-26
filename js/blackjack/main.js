

let firstCard = 20;
let secondCard = 12;

let sum =  firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

// 
let cards = [firstCard, secondCard]

function startGame() {
    renderGame();
}

function renderGame() {



    if (sum < 21) {

        message = "Do you want to draw a new card?";
    
    } else if (sum === 21) {
    
        message = "You've got a Blackjack!";
        hasBlackJack = true;
    
    } else {
    
        message = "You're out of the game";
        isAlive = false;
    
    }
    
    sumEl.textContent = "Sum: " + sum;

    cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1]; 

    messageEl.textContent = message;

}

// 

function newCard() {
    // console.log("new card drawn");
    // 
    let card = 5;
    sum += card;
    renderGame();
}

