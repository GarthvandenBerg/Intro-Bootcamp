// listen for button clicks
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */
function placeOrder() {
    // get form values
    var numPizzas = document.getElementById("numPizzas").value;
    var typePizza = document.getElementById("typePizza").value;
    var deliveryCity = document.getElementById("deliveryCity").value;

    // get the pizza price
    var orderPrice = calculatePrice(numPizzas, typePizza);

    // get the delivery price
    var isBirthday = document.getElementById("birthday").value; 
    
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, isBirthday);
    

    if (deliveryPrice === 0) {
        alert("You get free delivery!")
    } else {
        alert("There will be a delivery fee of $" + deliveryPrice)
    }

    // create the output
    var theOutput = "<p>Thank you for your order.</p>";

    // todo: output the delivery price, if there is one

    theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice);

    // display the output
    document.getElementById("displayTotal").innerHTML = theOutput;
}

/**
 * calculates pizza price
 */
function calculatePrice(numPizzas, typePizza) {
    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;

    if (typePizza === "supreme") {
        extraCharge = Number(numPizzas) * 2;
    }

    // todo: calculate extraCharge, if there is one.

    orderPrice += extraCharge;
    return orderPrice;
}

/**
 * calculates delivery price
 */
function calculateDelivery(orderPrice, deliveryCity, birthday) {
    var deliveryPrice = 0;

    if ((deliveryCity === "Anytown") && (orderPrice > 10) || birthday === "birthdayYes") {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 5;
    }

    return deliveryPrice;
}