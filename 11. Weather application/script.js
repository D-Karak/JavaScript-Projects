const APIKEY="b4549494528d4acd918172229241511";

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

const day = currentDate.getDay();
const dayArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const stringToDay=dayArr[day];


document.getElementById("current-day").textContent=stringToDay.toUpperCase();
document.getElementById("current-date").textContent=formattedDate;



const displayLocation=document.getElementById("location");
const displayWeatherIcon=document.getElementById("weather-logo");
const displayTemperature=document.getElementById("temperature");
const displayWeatherCondition=document.getElementById("weather-condition");
const displayRegion=document.getElementById("region-data");
const displayHumidity=document.getElementById("humidity-data");
const displayWind=document.getElementById("wind-data");
const displayLocTime=document.getElementById("local-time-data");
const displayForecast=document.getElementsByClassName("forecast-data")
const locationName=document.getElementById("input-location");
const search=document.getElementById("search-location");


search.addEventListener("click",()=>{
    const city=locationName.value.trim();
    if(city){
        fetchWeatherData(city);
        search.disabled=true;
        search.style.cursor="not-allowed";
        setTimeout(()=>{
            search.disabled=false;
            search.style.cursor="pointer";
        },600)
    }else{alert("Enter valid city name.");}
})

function fetchWeatherData(city){
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${city}&days=5`;
    fetch(url)
    .then((Response)=>Response.json())
    .then((data)=>{
        getWeatherData(data);
        getForecastData(data);
    })
    .catch((error)=>{
        console.error("Error fetching data!",error)
    })
}

function getWeatherData(data){
    displayLocation.textContent=`${data.location.name}, ${data.location.country}`;
    displayWeatherIcon.src=data.current.condition.icon;
    displayTemperature.innerHTML=`${data.current.temp_c}&deg;C`;
    displayWeatherCondition.textContent=`${data.current.condition.text}`;
    displayRegion.textContent=data.location.region;
    displayHumidity.textContent=`${data.current.humidity}%`
    displayWind.textContent=`${data.current.wind_kph} km/h`
    displayLocTime.textContent=`${data.location.localtime}`
}

function getForecastData(data) {
    const displayForecastArr=Array.from(displayForecast);
    displayForecastArr.forEach((Element,index)=>{
        const forecastDayData=data.forecast.forecastday[index+1];
        if(forecastDayData){
        const forecastDayName=dayArr[(day+index+1)%7];
        const forecastConditionIcon=forecastDayData.day.condition.icon;
        const forecastDayTemp=forecastDayData.day.avgtemp_c;
        Element.querySelector(".forecast-weather-icon").src=forecastConditionIcon;
        Element.querySelector(".forecast-day").innerHTML=forecastDayName;
        Element.querySelector(".forecast-day-temperature").innerHTML=`${forecastDayTemp}&deg;C`;
        }
    })
}
window.onload=()=>{fetchWeatherData("Kolkata")};