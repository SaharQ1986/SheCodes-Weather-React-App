import React, { useState } from "react";

function WeatherUnits(props) {
  const [unit, setUnit] = useState("celsius ");
  function convertFahrenheitHandler(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelsiusHandler(e) {
    e.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius ") {
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
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div className="WeatherUnits">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="unit">
          {" "}
          <a href="/" onClick={convertCelsiusHandler}>
            {" "}
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}

export default WeatherUnits;
