import { useState, useEffect } from "react";
import WeatherDisplay from '../components/WeatherDisplay';
import axios from 'axios';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Nature from "../assets/weather/nature.jpg"

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
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
                    console.log(data)
                    setWeatherData(data.current || data.forecast);
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
    
        fetchData();
    }, []);

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