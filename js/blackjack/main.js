

let firstCard = 20;
let secondCard = 1;

let sum =  firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

message = "";

// console.log(sum);

function startgame() {

    if (sum < 21) {

        message = "Do you want to draw a new card? 🙂 ";
    
    } else if (sum === 21) {
    
        message = "Woohoo! You've got a Blackjack! 🥳 ";
        hasBlackJack = true;
    
    } else {
    
        message = "You're out of the game ☹️ ";
        isAlive = false;
    
    }
    
    console.log(message);

}

