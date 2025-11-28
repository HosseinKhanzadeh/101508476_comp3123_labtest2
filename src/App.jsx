import { useState } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import { fetchWeather } from "./services/weatherApi";
import sampleWeather from "./sampleWeather.json";
import "./App.css";

export default function App() {
  const [weather, setWeather] = useState(sampleWeather);
  const [errMsg, setErrMsg] = useState("");

  const doSearch = async (city) => {
    setErrMsg(""); // ressetting error

    const data = await fetchWeather(city);

    if (!data) {
      setErrMsg("City not found. Please try again.");
      return;
    }

    setWeather(data);
  };

  return (
    <div className="app-container">
      <h1>Weather App - Lab Test 2</h1>
      <WeatherSearch onSearch={doSearch} />
      {errMsg && <div className="error-message">{errMsg}</div>}
      <WeatherCard weather={weather} />
      <WeatherDetails weather={weather} />
      <p style={{ fontSize: "12px", marginTop: "20px", color: "#666" }}>
        Made for COMP3123 – Lab Test 2
      </p>
    </div>
  );
}

