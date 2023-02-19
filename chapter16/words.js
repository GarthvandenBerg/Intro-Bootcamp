let startBtn = document.getElementById("btnStart");
let inputTxt = document.getElementById("input");
let outputTxt = document.getElementById("storyText");
let inputList = document.getElementById("inputList");

startBtn.addEventListener("click", createOutputText);

const questions = [
    "Adjective",
    "Verb Ending in 'ING'",
    "Room in a house",
    "Colour",
    "Plural Noun",
    "Verb Past tense",
    "Beverage",
    "type of music",
    "different room in house",
    "food"
];

function getInput(quest, id) {
    let inputField = document.createElement("input");
    let question = document.createElement("p");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("id", id);
    console.log(inputField);
    question.innerHTML = quest;
    inputList.appendChild(question);
    inputList.appendChild(inputField);
}

function createOutputText() {
    let newOutput = document.createElement("p");
    newOutput.append(
        `One ${getInnerHtml(0)}, day douglas was ${getInnerHtml(1)} in his ${getInnerHtml(2)} 
        ${getInnerHtml(3)}, reading a book about ${getInnerHtml(4)} ${getInnerHtml(5)}. \n\n
        As he ${getInnerHtml(6)} his ${getInnerHtml(7)} , he heard ${getInnerHtml(8)} music playing`
    );
    outputTxt.appendChild(newOutput);
}

function getInnerHtml(n) {
    return document.getElementById("inputList").value;
}

for (let i = 0; i < questions.length; i++) {
    getInput(questions[i], i);
}