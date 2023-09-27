import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
