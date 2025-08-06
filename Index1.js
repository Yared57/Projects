
 const apikey = "c3ccc911ddabab14afbb5a19484c0c01";
    let weatherData = {};
  
    let options = document.getElementById("dropdown");
    if(options){
    options.addEventListener("change",async(event)=>{
        const Track = event.target.value;
        let Data = await WeatherChecker(Track);
        weatherData = { 
            city: Data.name,
            temp: Data.main.temp,
            humidity: Data.main.humidity,
            description: Data.weather[0].description,
            id: Data.weather[0].id
           
    
        };
        sceneSwitcher()
    })}
        


    async function WeatherChecker(Track) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${Track}&appid=${apikey}&units=metric`;
        let Datas = await fetch(apiUrl);
        let GG = await Datas.json();
        return GG;
    }

    let i = 0;
    const slideshow = [
        "2021-Italian-Grand-Prix-Sunday.jpg",
        "ae70bcc4-silverstone-f1.jpg",
        "p002.jpg",
        "P90510221-spa-francorchamps-bel-16th-to-18th-june-2023-bmw-motorrad-motorsport-fim-endurance-world-championshi-2250px.jpg",
        "red-bull-ringcarmin-walcher-red-bull-ring-6-scaled.jpg",
        "suzuka-circuit-home-of-the-formula-one-japanese-grand-prix_100719920.jpg"
    ];
    if(options){
    function changeBackground() {
        const container = document.getElementById("slideshow-container");
        container.style.backgroundImage = `url('${slideshow[i]}')`;

        i = (i + 1) % slideshow.length;
    }
    }
    if(options){
    window.onload = function () {
        changeBackground();
        setInterval(changeBackground, 3000);
};}



function TireStress(Temp){
    switch(true){
     case(Temp>0&&Temp<=10):return "Minimal"
     case(Temp>10&&Temp<=25):return "Low"
     case(Temp>25&&Temp<=35):return "Medium"
     case(Temp>35&&Temp<=45):return "High"
     default:return "Unracable Tempretures"
    }
 }
 function TireChoices(wheatherID){
     switch(true){
         case (wheatherID>=200&&wheatherID<300):return "Wets"
         case (wheatherID>=300&&wheatherID<400):return "Inters"
         case (wheatherID>=500&&wheatherID<600):return "Inters"
         case (wheatherID>=600&&wheatherID<700):return "Unracable Conditions"
         case (wheatherID>=700&&wheatherID<800):return "Inters"
         case (wheatherID==800):return "Slicks"
         case (wheatherID>=801&&wheatherID<810):return "Slicks"
         default:return "Unracable condtions"
       }
     }
     function sceneSwitcher(){
        localStorage.setItem("Data",JSON.stringify(weatherData))
        window.location.href = "TrackDisplayer.html";


     }
     