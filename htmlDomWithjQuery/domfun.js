// Using jQuery # refers to your ID you put . refers to the class and no character refers to element

$("#btn1").click(function () {
    $("#main-heading").text("Hello world!");
    $("#main-heading").slideUp(1000).slideDown(1000);
});
$("body").append("<p>This is a new paragraph</p>");

// for (let i = 0; i < 2; i++) {
//     let userInput = prompt("Enter your favourite foods");
//     $("body").append(`<h3>${userInput}</h3`);
// }

// $("h1").text("This will fade away and come back").fadeOut(3000).fadeIn(2000);
// $("h1").slideUp(1000).slideDown(1000);

let friends = ["Johnny", "Phil", "Willem"];

for (let i = 0; i< friends.length; i++) {
    $("body").append(`<p>My friend ${friends[i]}</p>`);
}

// for (let i = 0; i < 5; i++) {
//     $("#main-heading").delay(1000).fadeOut(50).fadeIn(50);
// }

$("h1").fadeTo(2000, 0.2);

// var timeUp = function () {
//     alert("Time's up!");
//    };
// setTimeout(timeUp, 3000);

var doHomeworkAlarm = function () {
    alert("Hey! You need to do your homework!");
   };
var timeoutId = setTimeout(doHomeworkAlarm, 6000);

// Probably use an if statement to determine if timeout should be canceled.
clearTimeout(timeoutId);