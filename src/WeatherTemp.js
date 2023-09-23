import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showC(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function showF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemp">
        <span className="temp float-left pt-2">
          {Math.round(props.fahrenheit)}
        </span>
        <span className="unit float-left ">
          °F|
          <a href="/" onClick={showC}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    let celcius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <span className="WeatherTemp">
        <span className="temp float-left pt-2">{Math.round(celcius)}</span>
        <span className="unit float-left ">
          <a href="/" onClick={showF}>
            °F
          </a>
          |°C
        </span>
      </span>
    );
  }
}
