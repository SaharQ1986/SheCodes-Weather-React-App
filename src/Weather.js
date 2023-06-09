import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

function Weather(props) {
  // const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({ ready: false });
  function showCityWeather(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      city: response.data.name,
      temp: response.data.main.temp,
      icon: "https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png",
      description: response.data.weather[0].description,
      time: "Sunday 10:20",
      wind: response.data.wind.speed,
      humd: response.data.main.humidity,
    });
  }
  if (weather.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city ..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h2>{weather.city}</h2>
        <ul>
          <li>{weather.time}</li>
          <li className="text-capitalize">{weather.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weather.icon}
                alt={weather.description}
                className="float-left"
              />
              <span className="temp">{Math.round(weather.temp)}</span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              {/* <li>Precipitation: 12%</li> */}
              <li>Humidity: {weather.humd}%</li>
              <li>Wind: {Math.round(weather.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "50c2acd53349fabd54f52b93c8650d37";
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(url).then(showCityWeather);

    return "Loading ...";
  }
}
export default Weather;
