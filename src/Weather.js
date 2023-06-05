import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

function Weather() {
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
      <h1>New York</h1>
      <ul>
        <li>Wednesday 11:20</li>
        <li>Scattered showers</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
              alt="Scattered showers"
              className="float-left"
            />
            <span className="temp">18</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 30%</li>
            <li>Humidity: 46%</li>
            <li>Wind: 14 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Weather;
