import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "b99atfd426b3cde797eo6c02fa816d9b";
  let unit = "imperial";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Wed</div>
          <div className="WeatherForecast-icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="/"
            />
          </div>
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-high">60°</span>|
            <span className="WeatherForecast-temperature-low">50°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
