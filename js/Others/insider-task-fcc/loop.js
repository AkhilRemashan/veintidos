
// for loop
for(let i=10; i < 101; i +=10) {
    console.log(i);
}

// for loop with arrays
let messages = [
    "hey, how are you?",
    "great!, you?",
    "good, i'm on js course",
    "me too!",
    "glad to hear"
]

for (let i = 0; i < messages.length; i++) {
    console.log(messages[i]);
}

// for loop array output inside a paragraph
let sentance = ["Hi,", "my", "name", "is", "Akil"];
let paraEl = document.querySelector("#para-el");

for (let i = 0; i < sentance.length; i++) {
    paraEl.textContent += sentance[i] + " ";
}