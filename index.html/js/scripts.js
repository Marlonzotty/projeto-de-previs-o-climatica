//variaveis e seleção de elemnetos
const apiKey = "048cb6806527ac888ef367aea13f61ac";
const apiCountryURL = "https://countryflagsapi.com/png/";





const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("Temperature span");
const descElement = document.querySelector("Description");
const weatherIconElement = document.querySelector("#wheather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

//função

const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    console.log(data);
    return data;
};

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);
    console.log(data)
    cityElement.innerText = data.name;
    tempElement.innerText = data.weather[0].description;
};

//eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
});





