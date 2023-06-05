import logo from "./logo.svg";
import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <a
          rel="noreferrer"
          href="https://github.com/SaharQ1986/SheCodes-Weather-React-App.git"
          target="_blank"
        ></a>
      </div>
    </div>
  );
}

export default App;
