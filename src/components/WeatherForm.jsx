import React, { useState } from 'react';

const WeatherForm = ({ onSubmit }) => {
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(location, forecast);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Forecast:
          <input
            type="checkbox"
            checked={forecast}
            onChange={(e) => setForecast(e.target.checked)}
          />
        </label>
      </div>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
