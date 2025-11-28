export default function WeatherDetails({ weather }) {
  if (!weather) return <div className="no-data">No details available yet...</div>;

  return (
    <div className="weather-details">
      <h3>Details</h3>
      <ul>
        <li><strong>Feels Like:</strong> {weather.main.feels_like}°C</li>
        <li><strong>Humidity:</strong> {weather.main.humidity}%</li>
        <li><strong>Pressure:</strong> {weather.main.pressure} hPa</li>
        <li><strong>Wind Speed:</strong> {weather.wind.speed} km/h</li>
      </ul>
    </div>
  );
}

