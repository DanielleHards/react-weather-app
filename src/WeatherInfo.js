import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.icon}
              alt="sunny icon"
              className="float-left pb-4 pe-2"
            />

            <span className="temp float-left pt-2">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit float-left ">°F</span>
          </div>
        </div>
        <div className="col-6">
          <ul className="extras">
            <li>Feels Like {Math.round(props.data.feels_like)}°F</li>
            <li>Humidity {props.data.humidity}%</li>
            <li>Wind {Math.round(props.data.wind)}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
