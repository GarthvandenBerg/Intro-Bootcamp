var word = pickWord();
var answerArray = setupAnswerArray();
var remainingLetters = word.length;
var maxGuesses = 20;

while (remainingLetters > 0 && maxGuesses > 0) {
    //shows player the progress
 showPlayerProgress();
    //gets player input
 var guess = getGuess();
    //does data validation to check if user entered value is 1 letter long
 if (guess === null) {
 break;
 } else if (guess.length !== 1) {
 alert("Please enter a single letter.");
 } else {
    //if user entered value is 1 length then it will update the game state
    // to check how many correct letters have been entered
 var correctGuesses = updateGameState(guess);
 remainingLetters -= correctGuesses;
 }
}
// alerts player win or lose
showAnswerAndCongratulatePlayer();

//Picks a random word
function pickWord() {
    let words = ["pig", "dog", "monkey", "wolf"]
    let randomNum = Math.floor(Math.random() * words.length);
    return words[randomNum];
}

//Makes answer array filled with _ to show how many letters are in the word
function setupAnswerArray() {
    let tempArray = [];
    for (let i = 0; i < word.length; i++) {
        tempArray[i] = "_";
    }
    return tempArray;
}

//Shows player progress on the word
function showPlayerProgress() {
    alert(answerArray.join(" "));
}

//Uses a prompt to get user input
function getGuess() {
    return prompt("Please enter your guess. You have " + maxGuesses + " left.");
}

//Uses user input to compare against the correct word which is stored in word 
function updateGameState(guess) {
    maxGuesses--;
    let numberOfLettersCorrect = 0;
    for (let i = 0; i < word.length; i++){
        if (guess === word[i]) {
            answerArray[i] = guess;
            numberOfLettersCorrect++;
        }
    }
    return numberOfLettersCorrect;
}

//Displays a win screen
function showAnswerAndCongratulatePlayer() {
    if (word === answerArray.join("")) {
        alert("YOU WIN!!!")
    } else {
        alert ("YOU DIDNT WIN :(!")
    }
}