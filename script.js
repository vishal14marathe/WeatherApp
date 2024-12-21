const apiKey="fb363df090fd3a1480e9dd2b9da1d591";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const serchBox=document.querySelector(".serch input");
const serchBtn=document.querySelector(".serch button");
const weatherIcon=document.querySelector(".weather-icon");



async function checkWeather(city){
    const response=await fetch(apiUrl +city+ `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none"
    }
    else{
        var data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round( data.main.temp )+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";


    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    } 
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }
    
    document.querySelector(".weather").style.display="block"

    }

    

}

serchBtn.addEventListener("click",()=>{
   checkWeather(serchBox.value);
    
})
