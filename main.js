
const apiKey="3c5b09675b6000038a5c8447e5a9d436"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const inputEl=document.querySelector(".search");
const inputBtn=document.querySelector(".btn");
const weatherEl=document.querySelector(".image-icon");
const container=document.querySelector(".weather");
container.style.display="none"
async function checkWeather(city){
  const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
  var data = await response.json();
     
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";
     
  if (data.weather[0].main == "Clear") {
     weatherEl.src = "/images/clear.png"
  }
  else if (data.weather[0].main == "Drizzle") {
    weatherEl.src = "/images/drizzle.png"
  }
  else if (data.weather[0].main == "Mist") {
    weatherEl.src = "/images/mist.png"
  }
  else if (data.weather[0].main == "Snow") {
    weatherEl.src = "/images/snow.png"
  }
  else if (data.weather[0].main == "Rain") {
    weatherEl.src = "/images/rain.png"
  }
  else if (data.weather[0].main == "Clouds") {
    weatherEl.src = "/images/clouds.png"
  }
}

inputBtn.addEventListener("click", () => {
   if (inputEl.value === "") {
     return
}
   else {
     checkWeather(inputEl.value)
     container.style.display = "block"
}
});