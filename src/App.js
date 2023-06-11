import React from "react";
import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />
      </div>
      <footer>
        <p>
          This project was coded by Sahar.Q and is
          <a
            rel="noreferrer"
            href="https://github.com/SaharQ1986/SheCodes-Weather-React-App.git"
            target="_blank"
          >
            {" "}
            Open-source on Github
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
