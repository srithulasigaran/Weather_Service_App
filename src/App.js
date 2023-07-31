import React from 'react';
import WeatherService from './WeatherService';

function App() {
  return (
    <div className="App">
      <WeatherService location="New York" />
      <WeatherService location="London" />
    </div>
  );
}

export default App;
