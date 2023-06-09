import React from "react";
import FormattDate from "./FormattDate";
import WeatherIcon from "./WeatherIcon";

import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h2>{props.info.city}</h2>
      <ul>
        <li>
          <FormattDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.infor.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.info.icon} className="float-left" />
            {/* <img
              src={props.info.icon}
              alt={props.info.description}
              className="float-left"
            /> */}
            <span className="temp">{Math.round(props.info.temp)}</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            {/* <li>Precipitation: 12%</li> */}
            <li>Humidity: {props.info.humd}%</li>
            <li>Wind: {Math.round(props.info.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
