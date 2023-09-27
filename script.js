let temp = document.querySelector(".card .weather .temp");
let city = document.querySelector(".card .weather .city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let searchField = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weatherIcon");
let weather = document.querySelector(".weather");

let apiKey = "32b92c6051bf101621061689f5fe65bb";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function getData(town) {
  const response = await fetch(apiUrl + town + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    weather.style.display = "none";
  } else {
    var data = await response.json();
    temp.innerHTML = `${Math.round(data.main.temp)}°c`;
    city.innerHTML = data.name;
    humidity.innerHTML = `${data.main.humidity} %`;
    wind.innerHTML = `${data.wind.speed} km/h`;

    switch (data.weather[0].main) {
      case "Clear":
        weatherIcon.src = "images/clear.png";
    }
    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
    }
    switch (data.weather[0].main) {
      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
    }
    switch (data.weather[0].main) {
      case "Mist":
        weatherIcon.src = "images/mist.png";
    }
    switch (data.weather[0].main) {
      case "Rain":
        weatherIcon.src = "images/rain.png";
    }
    switch (data.weather[0].main) {
      case "Snow":
        weatherIcon.src = "images/snow.png";
    }
    weather.style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
getData();

searchBtn.addEventListener("click", () => {
  getData(searchField.value);
});
