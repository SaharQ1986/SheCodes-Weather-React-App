import React from "react";

import WeatherIcon from "./WeatherIcon";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

function WeatherForecastInfo(props) {
  let maxTemp = Math.round(props.data.temp.max);
  let minTemp = Math.round(props.data.temp.min);
  let icon = props.data.weather[0].icon;
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }
  return (
    <div>
      <div className="dailyforecast opacity-75">{day()}</div>
      <WeatherIcon code={icon} className="daily-icon" size={36} />
      <div className="daily-temp">
        <span className="daily-temp-max">{maxTemp}°</span>
        <span className="daily-temp-min">{minTemp}° </span>
      </div>
    </div>
  );
}

export default WeatherForecastInfo;
