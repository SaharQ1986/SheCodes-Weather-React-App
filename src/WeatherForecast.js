import React from "react";

import WeatherIcon from "./WeatherIcon";

import "bootstrap/dist/css/bootstrap.css";
import "./WeatherForecast.css";
import "./Weather.css";
import axios from "axios";

function WeatherForecast(props) {
  function forecastResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  const apiKey = "866a208a73eeff02182218e9441647a1";
  let long = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units={metric}`;
  axios.get(apiUrl).then(forecastResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="dailyforecast opacity-75">Mon</div>
          <WeatherIcon code="01n" className="daily-icon" size={36} />
          <div className="daily-temp">
            <span className="daily-temp-max">22°</span>
            <span className="daily-temp-min">10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
