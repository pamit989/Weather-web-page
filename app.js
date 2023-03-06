const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");

const getWeather = async (city) => {
  weather.innerHTML = `<h3>Please Wait...</h3>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const responce = await fetch(url);
  const data = await responce.json();
  return showWeather(data);
};

const showWeather = (data) => {
  if (data.cod == "404") {
    weather.innerHTML = `<h3>City Not Found</h3>`;
    return;
  }
  weather.innerHTML = `
    <div>
            <img
             src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
            style="width: 50px; height: 50px"
            alt="clowd"/>
    </div>
    <div>
        <h1>${data.main.temp} &#8451;</h1>
        <h4>${data.weather[0].main}</h4>
    </div>
        `;
};
form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});
