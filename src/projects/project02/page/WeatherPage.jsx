import React, { useEffect, useState } from 'react';
import '../css/weatherPage.css';
import WeatherBox from '../components/WeatherBox';
import WeatherButton from '../components/WeatherButton';
import ClockLoader from 'react-spinners/ClockLoader';
import HomeButton from '../../../HomeButton';
import WeatherSearch from '../components/WeatherSearch';

import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

import SunVideo from '../assets/video/sun.mp4';
import CloudVideo from '../assets/video/cloud.mp4';
import MistVideo from '../assets/video/mist.mp4';
import RainVideo from '../assets/video/rain.mp4';
import SnowVideo from '../assets/video/snow.mp4';

const WeatherPage = () => {
    const API_KEY = 'c16f4a6bc823370200be39822e83011e';

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(true);
    const [icon, setIcon] = useState('');
    const [videoBg, setVideoBg] = useState(SunVideo);
    const [cities, setCities] = useState(['seoul', 'new york', 'paris', 'tokyo']);
    // const cities = ['seoul', 'new york', 'paris', 'tokyo'];

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
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

        changeViewItems(data.weather[0].icon);

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

        changeViewItems(data.weather[0].icon);

        setLoading(false);
    };

    useEffect(() => {
        if (city === '') {
            getCurrentLocation();
        } else {
            getWeatherByCity();
        }
    }, [city]);

    const changeViewItems = (icon) => {
        let weatherIcon = '';
        if (icon.startsWith('01')) {
            weatherIcon = clear_icon;
            setVideoBg(SunVideo);
        } else if (icon.startsWith('02') || icon.startsWith('03') || icon.startsWith('04')) {
            weatherIcon = cloud_icon;
            setVideoBg(CloudVideo);
        } else if (icon.startsWith('09') || icon.startsWith('10')) {
            weatherIcon = rain_icon;
            setVideoBg(RainVideo);
        } else if (icon.startsWith('13')) {
            weatherIcon = snow_icon;
            setVideoBg(SnowVideo);
        } else if (icon.startsWith('50')) {
            weatherIcon = humidity_icon;
            setVideoBg(MistVideo);
        }

        setIcon(weatherIcon);
    };

    return (
        <>
            <div className="weather-container">
                <video src={videoBg} muted autoPlay loop playsInline />
                <HomeButton />
                <WeatherSearch cities={cities} setCities={setCities} setCity={setCity} />
                {loading ? (
                    <ClockLoader color="#f88c6b" loading={loading} size={150} />
                ) : (
                    <>
                        <WeatherBox weather={weather} icon={icon} />
                        <WeatherButton cities={cities} selected={city} setCity={setCity} />
                    </>
                )}
            </div>
        </>
    );
};

export default WeatherPage;
