import React, { useState } from 'react';
import './WeatherService.css'; 

const WeatherService = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeatherData = () => {
    setIsLoading(true);

    // Simulate an API call to fetch weather data
    setTimeout(() => {
      const fakeWeatherData = {
        location,
        temperature: 25,
        condition: 'Sunny',
      };
      setWeatherData(fakeWeatherData);
      setIsLoading(false);
    }, 2000); // Simulating a delay of 2 seconds
  };

  return (
    <div className="weather-service">
      <h2>Weather Service</h2>
      <button onClick={fetchWeatherData}>Get Weather</button>
      {isLoading && <p>Loading...</p>}
      {weatherData && (
        <div className="weather-info">
          <p>Location: {weatherData.location}</p>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Condition: {weatherData.condition}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherService;
