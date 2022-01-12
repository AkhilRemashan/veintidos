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
let psgcount = 0;
function increment() {
    psgcount = psgcount + 1;
    console.log(psgcount);
    document.getElementById("count-el").innerText = psgcount;
}
