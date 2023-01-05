//variaveis e seleção de elemnetos
const apiKey = "048cb6806527ac888ef367aea13f61ac";
const apiCountryURL = "https://countryflagsapi.com/png/";





const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");
//cidade que aparece na tela 
const cityElement = document.querySelector("#city");
//temperatura que aparece na tela
const tempElement = document.querySelector("#temperature span");
//descrição do clima que aparece na tela 
const descElement = document.querySelector("#description");
//API do icone que  aparece na tela 
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
// Humidade do local 
const humidityElement = document.querySelector("#humidity span");
// ventos do local
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

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

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    //countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;


    weatherContainer.classList.remove("hide");




};

//eventos
//
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);

});
// aqui é colocado o evento  de que quando você apert enter ja é diretamente pesquisada a cidade
cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const city = e.target.value;
        showWeatherData(city);
    }
});

// unsplash



