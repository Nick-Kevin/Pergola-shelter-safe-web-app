import React from 'react';
import Moon from "../assets/weather/icons8-lune-48.png"
import Sun from "../assets/weather/icons8-soleil-48.png"

const WeatherDisplay = ({ weatherData, city }) => {
  if (!weatherData) {
    return <div>Chargement des données..</div>;
  }

  const { temperature, observation_time, is_day, wind_speed, humidity, cloudcover, precip, weather_descriptions, pressure } = weatherData;

  return (
    <div className='shadow-2xl py-8 px-20 backdrop-blur rounded-3xl'>
      <h2 className='text-3xl font-bold'>{ city ? city : '' }</h2>
      <p className='mt-2'>{observation_time}</p>
      <div className='flex justify-center items-center my-5'>
        <div className='w-1/2 flex flex-col items-center'>
          <img src={is_day ? Sun : Moon} alt={is_day ? "Sun" : "Moon"} className='w-20' />
          <p>{is_day ? "Jour" : "Nuit"}</p>
        </div>
        <p className='w-1/2 text-4xl'>{temperature}°C</p>
      </div>
      <p className='text-xs mb-3'>Description: {weather_descriptions.join(', ')}</p>
      <div className='flex text-start flex-col gap-0.5 text-black font-light'>
        <p>Vitesse du vent: <span className='font-normal'>{wind_speed}km/h</span></p>
        <p>Couverture nuageuse: <span className='font-normal'>{cloudcover}%</span></p>
        <p>Humidité: <span className='font-normal'>{humidity}%</span></p>
        <p>Précipitation: <span className='font-normal'>{precip}mm</span></p>      
        <p>Préssion: <span className='font-normal'>{pressure} mb</span></p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
