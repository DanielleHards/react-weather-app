import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png",
      date: "Sunday 17:03",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-9">
            <form>
              <input
                type="search"
                placeholder="city name"
                className="form-control"
                autoFocus="on"
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
        </div>

        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png"
                alt="sunny icon"
                className="float-left pb-4 pe-2"
              />

              <span className="temp float-left pt-2">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit float-left ">°F</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity {weatherData.humidity}%</li>
              <li>Wind {Math.round(weatherData.wind)}mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b99atfd426b3cde797eo6c02fa816d9b";
    let weatherUnit = "imperial";
    let city = "Washington";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${weatherUnit}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
