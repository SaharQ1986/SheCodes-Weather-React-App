import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./WeatherForecast.css";
import "./Weather.css";
import axios from "axios";
import WeatherForecastInfo from "./WeatherForecastInfo";

function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState("");

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function forecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col">
                  <WeatherForecastInfo data={dailyForecast} key={index} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "866a208a73eeff02182218e9441647a1";
    let long = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(forecastResponse);

    return null;
  }
}

export default WeatherForecast;
