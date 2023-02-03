var dreamCar = {
    make: 'Merc',
    model: 'g19',
    colour: 'orange', 
    year: '1956',
    bodyStyle: 'coupe',
    price: '100000'
}

console.log(dreamCar);

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("carbody").style.backgroundColor = dreamCar.colour;
document.getElementById("carbody").innerHTML = dreamCar.make + " " +dreamCar.model;

