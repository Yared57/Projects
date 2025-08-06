let Pirelli = document.getElementById("Pirelli");
let displayDiv = document.getElementById("displayResults");

const trackBaseTimes = {
    "Suzuka": { F1: 90, GT3: 120 },
    "Malmedy": { F1: 100, GT3: 130 },
    "Spielberg": { F1: 85, GT3: 115 },
    "Monza": { F1: 80, GT3: 110 },
    "Towcester": { F1: 88, GT3: 118 },
    "Lusail": { F1: 92, GT3: 122 }
};

let buttons = document.querySelectorAll("button");
buttons.forEach((elem) => {
    elem.addEventListener("click", test);
});

let GG = JSON.parse(window.localStorage.getItem("Data"));

function test(event) {
    if (event.target.value == "F1") {
        F1DataDisplayer();
    } else {
        GT3DataDisplayer();
    }
}

function F1DataDisplayer() {
    let TiresWeather = TireChoices(GG.id);
    let TireStressV = TireStress(GG.temp);
    let FastLap = getLapTime(GG.city, "F1");

    displayResults(FastLap, TireStressV);
    imagecontroller(TiresWeather);
}

function GT3DataDisplayer() {
    let TiresWeather = TireChoices(GG.id);
    let TireStressV = TireStress(GG.temp);
    let FastLap = getLapTime(GG.city, "GT3");

    displayResults(FastLap, TireStressV);
    imagecontroller(TiresWeather);
}

function TireStress(Temp) {
    switch (true) {
        case (Temp > 0 && Temp <= 10): return "Minimal";
        case (Temp > 10 && Temp <= 25): return "Low";
        case (Temp > 25 && Temp <= 35): return "Medium";
        case (Temp > 35 && Temp <= 45): return "High";
        default: return "Unracable Temperatures";
    }
}

function TireChoices(weatherID) {
    switch (true) {
        case (weatherID >= 200 && weatherID < 300): return "Wets";
        case (weatherID >= 300 && weatherID < 400): return "Inters";
        case (weatherID >= 500 && weatherID < 600): return "Inters";
        case (weatherID >= 600 && weatherID < 700): return "Unracable Conditions";
        case (weatherID >= 700 && weatherID < 800): return "Inters";
        case (weatherID == 800): return "Slicks";
        case (weatherID >= 801 && weatherID < 810): return "Slicks";
        default: return "Unracable conditions";
    }
}

function getLapTime(track, category) {
    if (!trackBaseTimes[track]) return "Track not found";
    return trackBaseTimes[track][category] + "s";
}

function displayResults(lapTime, tireStress) {
    displayDiv.innerHTML = `
        <p><strong>Fastest Lap Time:</strong> ${lapTime}</p>
        <p><strong>Tire Stress Level:</strong> ${tireStress}</p>`;
}

function imagecontroller(TiresWeather) {
    

    if (TiresWeather == "Slicks") {
        Pirelli.src = "/Pirelli/download.jfif";
    } else if (TiresWeather == "Inters") {
        Pirelli.src = "/Pirelli/gomme_f1_2.jpg";
    } else if (TiresWeather == "Wets") {
        Pirelli.src = "/Pirelli/pirelli-pole-position-wind-tunnel-tyre-blue-18-scale-12-wet.jpg"
    }
}
