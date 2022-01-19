// document.getElementById("count-el").innerText = 5;

// VARIABLES
// let myAge = 29;
// let humanDogRatio = 7;
// myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// 
// 
// 
// INCREMENT + DECREMENT
// let bonusPoints = 50;
// bonusPoints = bonusPoints + 100;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 25;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 70;
// console.log(bonusPoints);
// 
// 
// ONCLICK FUNCTION
// function increment() {
//     console.log("clicked!")
// }
// 
// 
// 
// FUNCTION
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// 
// function lapsum() {
//     sum = lap1 + lap2 + lap3;
//     console.log(sum);
// }
// 
// lapsum();
// 
// 
// 
// SUBWAY COUNTER
        // let psgcount = 0;
        // function increment() {
        //     psgcount = psgcount + 1;
        //     console.log(psgcount);
        //     document.getElementById("count-el").innerText = psgcount;
        // }
        // function reset() {
        //     psgcount = 0;
        //     document.getElementById("count-el").innerText = psgcount;
        // }
let countEl = document.getElementById("count-el");
let count = 0;
let res = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count; 
}
function reset() {
    count = 0;
    countEl.innerText = count;
}
// function save() {
//     console.log(count);
// }

    // 
    // let message = "You've 3 new notifications";
    // let user = "Tom";

    // console.log(message + ", " + user + "!!");

    // let messageToUser = message + ", " + user + "!!";
    // console.log(messageToUser);

    // 
    // let myName = "Joseph";
    // let greeting = "Hi, my name is ";

    // let myGreeting = greeting + myName;
    // console.log(myGreeting);

// SAVE FUNCTIONALITY

let saveEl = document.getElementById("save-el");

function save() {

     let countStr = count + " - ";
     saveEl.textContent += countStr;
     countEl.textContent = 0;
     count = 0;


}

