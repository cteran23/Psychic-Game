var randomLetter = randomLetter;
var letters = "qwertyuiopasdfghjklzxcvbnm"
var win = 0;
var loss = 0;
var score = 0;
var guesses = 10;
var usedArray = [];

randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetter);

function computerGuess() {
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLetter);
}

document.onkeyup = function (event) {
    var userGuess = event.key;

    if (userGuess === randomLetter) {
        win++;
        attempts = 10;
        usedArray = [];
    }

    computerGuess();
    if (userGuess !== randomLetter) {
        guesses--;
    }

    if (guesses == 0) {
        loss++;
        usedArray = []
        guesses = 10;
    }

    if (usedArray.indexOf(userGuess) >= 0) {
    }
    else {
        usedArray.push(userGuess);
        document.getElementById("guessesleft").innerHTML = usedArray;
        console.log(usedArray);
    }

    document.getElementById("win").innerHTML = win;
    document.getElementById("loss").innerHTML = loss;
    document.getElementById("guesses").innerHTML = guesses;
}

//Psuedo Code

//Create A Random Letter Generator.

//Ask User For Guess.

//Check If Guess Is Correct.

//If Guess Is Correct, User Wins.

//If Guess Is Incorrect, User Loses.