// document.getElementById("myName").innerHTML = "Definitly not Velkoz"
// document.querySelector("p").innerHTML = "<em>Wow I love food</em>"

var item1 = "";
var item2 = "";
var item3 = "";

let changeBtn = document.getElementById("btnChange");
changeBtn.addEventListener("click", getValues);

function getValues () {
    item1 = prompt('Enter LI 1');
    item2 = prompt('Enter LI 2');
    item3 = prompt('Enter LI 3');

    updateList();
}

function updateList(){
    document.getElementById("listOfLikes").innerHTML = 
    `
    <li>${item1}</li>
    <li>${item2}</li>
    <li>${item3}</li>
    `;
}