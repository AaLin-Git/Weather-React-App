import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                    <h1 class="h1">{props.data.city}</h1>
                    <div class="current">
                        <img src={props.data.icon} alt="icon"/>
                        <div class="temperature-block">
                            <WeatherTemperature celsius={props.data.temperature} />
                        </div>
                        <div class="col-5 day">
                            <FormattedDate date={props.data.date} />
                            <div class="wind-speed">Wind: {props.data.wind} m/s</div>
                            <div class="humidity">Humidity: {props.data.humidity}%</div>
                            <div class="description">{props.data.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
