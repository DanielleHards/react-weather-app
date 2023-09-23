import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Washington" />
        <a
          href="https://github.com/DanielleHards/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          This code is open-sourced!
        </a>
        ;
      </div>
    </div>
  );
}
