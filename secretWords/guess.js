var secret = Math.floor(Math.random()*10) + 1;
var answer = parseInt(prompt('Please guess the secret number (1-10)'));
console.log(Number("4"));
while (answer !== secret) {
    if (answer > secret){
        answer = parseInt(prompt('TOO HIGH! Guess again(1-10)'));
    } else if (answer < secret){
        answer = parseInt(prompt('TOO LOW! Guess again(1-10)'));
    }
}

if (answer === secret) {
    alert("You win!");
}