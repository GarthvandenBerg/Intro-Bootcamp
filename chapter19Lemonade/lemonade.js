var days = [
    "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday"
];
var weather = [
    "sunny", "partly sunny", "partly cloudy",
    "cloudy", "raining", "snowing", "thunderstorm", "foggy"
];

var maxTemp = 100;
var minTemp = 0;
var costPrice = 0.5;
var dailyTemp = [];

generateWeather();

function generateWeather() {
    var weatherToday;
    var tempToday;
    document.getElementById("5DayWeather").innerHTML = "";
    for (var i = 0; i < days.length; i++) {
        var weatherToday = weather[Math.floor(Math.random() * weather.length)];
        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        dailyTemp[i] = tempToday;
        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}

function openStand() {
    let glassesSold = 0;
    let totalGlasses = Number(document.getElementById('numGlasses').value);
    let sellPrice = Number(document.getElementById('glassPrice').value);

    for (let i = 0; i < days.length; i++) {
        var glassForDay = 0;
        if (glassesSold < totalGlasses) {
            glassForDay = Math.floor(dailyTemp[i] / sellPrice);
            glassesSold += Math.floor(dailyTemp[i] / sellPrice);
        } else {
            alert('ALL GLASSES SOLD');
            glassesSold = totalGlasses;
            break;
        }
        document.getElementById("result").innerHTML += "<p>" + days[i] +
            ", you sold " + glassForDay + " glasses of lemonade.</p > ";
    }
}

function resetForm() {
    document.getElementById('numGlasses').value = "";
    document.getElementById('glassPrice').value = "";
    document.getElementById("result").innerHTML = "";
    generateWeather();
}