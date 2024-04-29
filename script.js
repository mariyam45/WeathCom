const container = document.querySelector(".container");
const search = document.querySelector(".search_box");
const weatherBox = document.querySelector(".weather_box");
const weatherDetails = document.querySelector(".weather_details");
const error404 = document.querySelector(".not_found");
const cityHide = document.querySelector(".city_hide");

search.addEventListener("click", () => {
  const APIKey = "f3606236991659cd32d83dd48a7f2d70";
  const city = document.querySelector(".search_box input").value;
  // console.log("");

  if (city == "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod == "404") {
        cityHide.textContent = city;
        container.style.height = "400px";
        weatherBox.classList.remove("active");
        weatherDetails.classList.remove("active");
        error404.classList.add("active");
        return;
      }

      const image = document.querySelector(".weather_box img");
      const temperature = document.querySelector(".weather_box .temperature");
      const description = document.querySelector(".weather_box .description");
      const humidity = document.querySelector(
        ".weather_details .humidity span"
      );
      const wind = document.querySelector(".weather_details .wind span");

      if (cityHide.textContent == city) {
        return;
      } else {
        cityHide.textContent = city;

        container.style.height = "555px";
        container.classList.add("active");
        weatherBox.classList.add("active");
        weatherDetails.classList.add("active");
        error404.classList.remove("active");

        setTimeout(() => {
          container.classList.remove("active");
        }, 2500);

        switch (data.weather[0].main) {
          case "Clear":
            image.src = "assets/clear.png";
            break;
          case "Rain":
            image.src = "/assets/rain.png";
            break;
          case "Snow":
            image.src = "assets/snow.png";
            break;
          case "Clouds":
            image.src = "/assets/cloud.png";
            break;
          case "Mist":
            image.src = "/assets/mist.png";
            break;
          case "Haze":
            image.src = "/assets/haze.png";
            break;

          default:
            image.src = "assets/cloud.png";
        }

        temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;

        description.innerHTML = `${data.weather[0].description}`;

        humidity.innerHTML = `${data.main.humidity}%`;

        wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`;

        const infoWeather = document.querySelector(".info_weather");
        const infoHumidity = document.querySelector(".humidity");
        const infoWind = document.querySelector(".info_wind");

        const elCloneInfoWeather = infoWeather.cloneNode(true);
        const elCloneInfoHumidity = infoHumidity.cloneNode(true);
        const elCloneInfoWind = infoWind.cloneNode(true);
      }
    });
});
