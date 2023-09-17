import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-9">
          <form>
            <input
              type="search"
              placeholder="city name"
              className="form-control"
            />
          </form>
        </div>
        <div className="col-3">
          <form>
            <input type="submit" value="search" className="btn btn-primary" />
          </form>
        </div>
      </div>

      <h1>Washington, DC</h1>
      <ul>
        <li>Saturday 14:04</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny icon"
          />
          72°
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity 10</li>
            <li>Wind 10mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
