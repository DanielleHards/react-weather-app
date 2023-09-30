import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    return days[day];
  }
  let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img src={props.data.condition.icon_url} alt="/" />
      </div>
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-high">{maxTemp()}</span>|
        <span className="WeatherForecast-temperature-low">{minTemp()}</span>
      </div>
    </div>
  );
}
