const container = document.querySelector(".container");
const search = document.querySelector(".search");
const weatherBox = document.querySelector(".weather_box");
const weatherDetails = document.querySelector(".weather_details");

search.addEventListener("click", () => {
  const APIKey = "f3606236991659cd32d83dd48a7f2d70";
  const city = document.querySelector("search_box input").value;

  if (city == "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((res) => res.json())
    .then((json) => {
      const img = document.querySelector(".weather_box img");
      const tempereture = document.querySelector(".weather_box .tempereture");
      const description = document.querySelector(".weather_box .description");
      const humidity = document.querySelector(
        ".weather_details .humidity span"
      );
      const wind = document.querySelector(".weather_details .wind span");
    });

  switch (json.weather[0].main) {
    case "Clear":
      image.src = "/assets/clear.png";
      break;
    case "Rain":
      image.src = "/assets/rain.png";
      break;
    case "Snow":
      image.src = "/assets/snow.png";
      break;
    case "Cloud":
      image.src = "/assets/cloud.png";
      break;
    case "Mist":
      image.src = "/assets/mist.png";
      break;
    case "Haze":
      image.src = "/assets/haze.png";
      break;

    default:
      img.src = "/assets/cloud.png";
  }
});
