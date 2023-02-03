// document.getElementById("lefteye").style.backgroundColor = "purple";

// document.getElementById("head").style.transform = "rotate(345deg)"

// document.getElementById("body").style.border = "2px black solid";

// document.getElementById("mouth").style.borderRadius = "10px";

// document.getElementById("righteye").style.border = "4px yellow dotted";

// document.getElementById("leftarm").style.backgroundColor = "#FF00FF";

// document.getElementById("body").style.color = "#FF0000";

// document.getElementById("head").style.borderTop = "5px black solid";

// document.getElementById("nose").style.borderRadius = "50%";

// document.getElementById("rightarm").style.backgroundColor = "green";

let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");
let leftArm = document.getElementById("leftarm");
let nose = document.getElementById("nose");
let head = document.getElementById("head");
rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveLeftRight);
nose.addEventListener("click", clownNose);
head.addEventListener("click", shakeHead);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var animationId = setInterval(frame, 10);

    function frame() {
        robotPart.style.top = top + "%";
        top++
        if (top === 20) {
            clearInterval(animationId);
        }
    }
}

function moveLeftRight(e) {
    var robotPart = e.target;
    var left = 0;
    var animationId = setInterval(frame, 10);

    function frame() {
        robotPart.style.left = left + "%";
        left++
        if (left === 70) {
            clearInterval(animationId);
        }
    }
}

function clownNose(e) {
    var robotPart = e.target;
    var howManyTimes = 0;
    var animationId = setInterval(frame, 100);

    function frame() {
        howManyTimes++;
        if (howManyTimes%2 === 0) {
            robotPart.style.backgroundColor = "red";
        } else {
            robotPart.style.backgroundColor = "green";
        }
        if (howManyTimes === 70) {
            clearInterval(animationId);
        }
    }
}

function shakeHead(e) {
    var robotPart = e.target;
    var num = 0;
    var animationId = setInterval(frame, 50);

    function frame() {
        num++;
        if (num%2 === 0) {
            robotPart.style.transform = "rotate(345deg)"
        } else {
            robotPart.style.transform = "rotate(15deg)"
        }
        if (num === 70) {
            clearInterval(animationId);
        }
    }
}