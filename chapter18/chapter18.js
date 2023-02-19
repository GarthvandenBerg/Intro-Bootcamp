var money = 20;
var lunches = 0;

document.getElementById("money").innerHTML = money;
document.getElementById("placeOrder").addEventListener("click", buyLunches);

function buyLunches() {
     resetForm();
     var day = 0;
    
    while (money > 0) { 
    
        var priceToday = getSandwichPrice();
        var numberOfSandwiches = document.getElementById("numSandwiches").value;
        
        var totalPrice = numberOfSandwiches * priceToday;
        
        if (money >= totalPrice) {
            money = money - totalPrice;
            day++;
            
            lunches ++;
            document.getElementById("receipt").innerHTML += "<p>On day " + day + ", sandwiches are: $" + priceToday + ".  You have $" + money.toFixed(2) + " left.</P>";
            
        } else { 
            document.getElementById("receipt").innerHTML += "<p>On day " + day + ", sandwiches are: $" + priceToday + ".  You don't have enough money.</P>";
          money = 0;
        }
    }
    document.getElementById("receipt").innerHTML += "<p>You were able to buy " + lunches + " this week.</p>";
}


function getSandwichPrice() {
    var sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
    return sandwichPrice;
}

function resetForm() {
    money = 20;
    lunches = 0;
    document.getElementById("receipt").innerHTML = "";

}