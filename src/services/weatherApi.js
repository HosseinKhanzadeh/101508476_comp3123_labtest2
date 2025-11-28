export async function fetchWeather(city) {
  if (!city) return null;

  const url = `https://wttr.in/${city}?format=j1`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    return {
      name: city.charAt(0).toUpperCase()+city.slice(1),
      weather: [
        {
          description: data.current_condition[0].weatherDesc[0].value,
          iconUrl: data.current_condition[0].weatherIconUrl[0].value
        }
      ],
      main:  {
        temp: parseFloat(data.current_condition[0].temp_C),
        feels_like: parseFloat(data.current_condition[0].FeelsLikeC),
        humidity:  parseFloat(data.current_condition[0].humidity),
        pressure: parseFloat(data.current_condition[0].pressure)
      }, 
      wind: {
        speed: parseFloat(data.current_condition[0].windspeedKmph)
      }
    };

  } catch (err) {
    console.error("API error:", err);
    return null;
  }
}

