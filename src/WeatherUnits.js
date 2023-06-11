import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

function WeatherUnits(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFahrenheitHandler(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelsiusHandler(e) {
    e.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherUnits">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          °C |{" "}
          <a href="/" onClick={convertFahrenheitHandler}>
            {" "}
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherUnits">
        <span className="temp">{Math.round(fahrenheit())}</span>
        <span className="unit">
          {" "}
          <a href="/" onClick={convertCelsiusHandler}>
            °C
          </a>{" "}
          | °F{" "}
        </span>
      </div>
    );
  }
}

export default WeatherUnits;
