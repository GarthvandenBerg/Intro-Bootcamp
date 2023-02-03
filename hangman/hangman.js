const numberOfLives = 10;

let randomWords = ["misisipi", "elephant", "yellow"];
let guessBtn = document.getElementById("guessBtn");
let currentWord = "";
let answerArray = [];
let wrongGuessesSoFar = 0;
let livesRemain = document.getElementById("livesRemain");
let answerP = document.getElementById("answer");

function randomWord() {
    let randomNum = Math.floor(Math.random()*randomWords.length);
    currentWord = randomWords[randomNum]
    for (let i = 0; i < currentWord.length; i++){
        answerArray[i] = "_ ";
    }
    answerP.innerHTML = answerArray.join("");
}

function gameWin() {
    if(answerArray.join("") === currentWord) {
        alert("HURRAY YOU WIN!!! \nthe word was " + currentWord);
        onInit();
    }
}

function onGuess() {
    let userGuess = document.getElementById("userEntered").value;
    userGuess = userGuess.toLowerCase();

    if(userGuess.length > 1 || userGuess.length === 0) {
        alert("Enter valid input!");
        return;
    }

    let answerTrue = false;
    for(let i = 0; i < currentWord.length; i++){
        if(userGuess === currentWord[i]){
            if(answerArray[i] === currentWord[i]){
                alert("You have guessed that already");
                answerTrue = true;
                break;
            } else {
                answerArray[i] = userGuess;
                answerTrue = true;
            }
        } else if (!answerTrue) {
            answerTrue = false;
        }
    }

    document.getElementById("userEntered").value = "";
    answerP.innerHTML = answerArray.join("");
    livesHandler(answerTrue);
    gameWin();
}

function onRestart() {
    guessBtn.disabled = false;
    onInit();
}

function livesHandler(answer) {
    if (answer === false) {
        wrongGuessesSoFar++;
    } else {
        return;
    }

    livesRemain.innerHTML = `Lives Remaining: ${numberOfLives-wrongGuessesSoFar}`;

    if (wrongGuessesSoFar === numberOfLives) {
        alert("OUT OF LIVES")
        guessBtn.disabled = true;
    }

}

function onInit() {
    answerArray = [];
    answerP.innerHTML = "";
    livesRemain.innerHTML = `Lives Remaining: ${numberOfLives}`;
    wrongGuessesSoFar = 0;
    randomWord();
    livesHandler();
}

onInit();