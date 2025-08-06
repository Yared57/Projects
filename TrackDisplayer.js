import getWeatherData from "./Index1.js";
let Data= await getWeatherData()
console.log(WeatherData)



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