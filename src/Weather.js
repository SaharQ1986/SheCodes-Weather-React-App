import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

function Weather(props) {
  // const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });
  function showCityWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      temp: response.data.main.temp,
      coord: response.data.coord,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humd: response.data.main.humidity,
    });
  }

  function search() {
    const apiKey = "50c2acd53349fabd54f52b93c8650d37";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showCityWeather);
  }

  function submitHandler(e) {
    e.preventDefault();
    search();
  }

  function inputCityChange(e) {
    setCity(e.target.value);
  }

  if (weather.ready) {
    return (
      <div className="weather">
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city ..."
                className="form-control"
                autoFocus="on"
                onChange={inputCityChange}
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
        <WeatherInfo info={weather} />
        <WeatherForecast coordinates={weather.coord} />
      </div>
    );
  } else {
    search();
    return "Loading ...";
  }
}
export default Weather;
