import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
//import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
    setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        wind: response.data.wind.speed,
        city: response.data.name,
    });
    }

    function handleSubmit(event) {
    event.preventDefault();
    search();
    }

    function handleCityChange(event) {
    setCity(event.target.value);
    }

    function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
    return (
        <div className="Weather">
            <form id="search-form" class="mb-3" onSubmit={handleSubmit}>
                <div class="row">
                    <div class="col-8">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search the city"
                            autoComplete="off"
                            autoFocus="on"
                            id="city-input"
                            onChange={handleCityChange}
                        />
                    </div>
                    <div className="col-2">
                        <button type="submit" className="button">Search</button>
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} defaultCity="Amsterdam" />
        </div>
        );
    } else {
    search();
    return "Loading...";
    }
}
