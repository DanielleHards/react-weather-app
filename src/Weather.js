import React, { useState } from "react";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      feels_like: response.data.temperature.feels_like,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      date: new Date(response.data.time * 1000),
    });
  }
  function search() {
    const apiKey = "b99atfd426b3cde797eo6c02fa816d9b";
    let weatherUnit = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${weatherUnit}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-9">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="city name"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </form>
          </div>

          <div className="col-3">
            <form>
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </form>
          </div>
          <WeatherInfo data={weatherData} />
          <WeatherForecast />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
