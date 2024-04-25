let city = "";
const apiKey = "ad10bda0528049c081b09ba345005938";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric`
console.log(apiUrl);

// const checkWeather = async()=>{
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error :",error);
//     }
// }

const checkWeather = async(city)=>{
    
    fetch(`${apiUrl}&q=${city}`)
    .then((response)=>response.json())
    .then((data)=>{
        document.querySelector(".error").style.display = "none";
        document.querySelector(".temp").innerHTML = Math.ceil(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";  
        
        const weather = data.weather[0].main;
        if(weather === "Clear"){
            document.querySelector(".weather-icon").src = "images/clear.png";
        }else if(weather === "Clouds"){
            document.querySelector(".weather-icon").src = "images/clouds.png";   
        }else if(weather === "Drizzle"){
            document.querySelector(".weather-icon").src = "images/drizzle.png";   
        }else if(weather === "Humidity"){
            document.querySelector(".weather-icon").src = "images/humidity.png";   
        }else if(weather === "Mist"){
            document.querySelector(".weather-icon").src = "images/mist.png";   
        }else if(weather === "Rain"){
            document.querySelector(".weather-icon").src = "images/rain.png";   
        }else if(weather === "Search"){
            document.querySelector(".weather-icon").src = "images/search.png";   
        }else if(weather === "Snow"){
            document.querySelector(".weather-icon").src = "images/snow.png";   
        }else{
            document.querySelector(".weather-icon").src = "images/wind.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".value").innerHTML= data.weather[0].main;
    })
    .catch(()=>{
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    })

    // document.querySelector(".temp").innerHTML = data.main.temp;
    // document.querySelector(".city").innerHTML = data.sys.name;
    // document.querySelector(".humidity").innerHTML = data.main.humidity;
    // document.querySelector(".wind").innerHTML = data.wind.speed;
}

// const weather = checkWeather();

const btn = document.querySelector(".search button");
btn.addEventListener("click",()=>{
    city = document.querySelector(".search input").value;
    checkWeather(city);
})