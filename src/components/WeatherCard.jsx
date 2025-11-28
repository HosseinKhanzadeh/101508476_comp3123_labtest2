export default function WeatherCard({ weather }) {
  if (!weather) return <div>No weather data</div>;

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <div className="weather-icon-area">
        import weatherIcon from "../assets/weather.png";
        <img src={weather.weather[0].iconUrl} alt="icon" className="weather-icon" />
      </div>

      <div className="temp">{weather.main.temp}°C</div>

      <div className="description">
        {weather.weather[0].description}
      </div>
      <p className="last-updated">
        Last updated at {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}

