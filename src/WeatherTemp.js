import React from "react";

export default function WeatherTemp(props) {
  return (
    <span className="WeatherTemp">
      <span className="temp float-left pt-2">
        {Math.round(props.fahrenheit)}
      </span>
      <span className="unit float-left ">°F</span>
    </span>
  );
}
