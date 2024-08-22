import { useState, useEffect } from "react";
import WeatherDisplay from '../components/WeatherDisplay';
import axios from 'axios';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Nature from "../assets/weather/nature.jpg"

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [cloudCoverState, setCloudCoverState] = useState(0);
    const [humidityState, setHumidityState] = useState(0);
    const apiKey = "560d9258d943c960b6308ff5d1ed4526";
    const options = {
        method: 'GET',
        url: `http://api.weatherstack.com/current?access_key=${apiKey}`,
        params: {
            query: "Antananarivo",
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options);
    
                const data = response.data;
                if (data.error) {
                    console.error('Error fetching weather data:', data.error.info);
                } else {
                    setWeatherData(data.current || data.forecast);
                    setCloudCoverState(data.current.cloudcover)
                    setHumidityState(data.current.humidity)
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
    
        fetchData();
    }, []);

    useEffect(() => {
        handleWeather(cloudCoverState, humidityState)
    }, [cloudCoverState, humidityState])

    const handleWeather = (cloud, hmdt) => {
        if (cloud >= 75 && hmdt >= 80) {
            sendCommandToESP8266("off")
        } else {
            sendCommandToESP8266("on")
        }
    }

    const sendCommandToESP8266 = (action) => {
        fetch(`http://192.168.10.106/led/${action}`)
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error("Error:", error));
      }

    return (
        <div>
            <Navbar />
            <div className="h-screen absolute w-full h-screen flex items-center justify-center" style={{backgroundImage: `url(${Nature})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <WeatherDisplay weatherData={weatherData} city={options.params.query} />
            </div>            
            <Footer />
        </div>
    )
}

export default Weather