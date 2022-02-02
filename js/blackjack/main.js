

let firstCard = getRandomcard();
let secondCard = getRandomcard();

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

// 
function getRandomcard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    return randomNumber; 
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

    // cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1]; 

    cardsEl.textContent = "Cards: "; 


    for(i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    messageEl.textContent = message;

}

// 

function newCard() {
    
    let card = getRandomcard();
    sum += card;
    // pushing new card in cards array
    cards.push(card);
    console.log(cards)


    renderGame();
}

