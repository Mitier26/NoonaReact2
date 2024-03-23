import React, { useEffect, useState } from 'react';
import '../css/weatherPage.css';
import WeatherBox from '../components/WeatherBox';
import WeatherButton from '../components/WeatherButton';
import ClockLoader from 'react-spinners/ClockLoader';
import HomeButton from '../../../HomeButton';

const WeatherPage = () => {
    const API_KEY = 'c16f4a6bc823370200be39822e83011e';

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(true);
    const cities = ['seoul', 'new york', 'paris', 'tokyo'];

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            getWeatherByCurrentLocation(lat, lon);
        });
    };
    const getWeatherByCurrentLocation = async (lat, lon) => {
        let url = new URL('https://api.openweathermap.org/data/2.5/weather?');
        url.searchParams.set('lat', lat);
        url.searchParams.set('lon', lon);
        url.searchParams.set('units', 'metric');
        url.searchParams.set('lang', 'kr');
        url.searchParams.set('appid', API_KEY);

        setLoading(true);

        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);

        setLoading(false);
    };

    const getWeatherByCity = async () => {
        let url = new URL('https://api.openweathermap.org/data/2.5/weather?');
        url.searchParams.set('q', city);
        url.searchParams.set('units', 'metric');
        url.searchParams.set('lang', 'kr');
        url.searchParams.set('appid', API_KEY);
        setLoading(true);

        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);

        setLoading(false);
    };

    useEffect(() => {
        city === '' ? getCurrentLocation() : getWeatherByCity();
    }, [city]);

    return (
        <div className="weather-container">
            <HomeButton />
            {loading ? (
                <ClockLoader color="#f88c6b" loading={loading} size={150} />
            ) : (
                <>
                    <WeatherBox weather={weather} />
                    <WeatherButton cities={cities} selected={city} setCity={setCity} />
                </>
            )}
        </div>
    );
};

export default WeatherPage;
