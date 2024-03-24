import React from 'react';
import { WiThermometer } from 'react-icons/wi';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

function WeatherBox({ weather, icon }) {
    const temp = weather.main.temp;

    const fahrenheit = Math.floor((9 / 5) * temp + 32);

    // let icon = icon;

    // if (weather.weather[0].icon === '01d' || weather.weather[0].icon === '01n') {
    //     icon = clear_icon;
    // } else if (weather.weather[0].icon === '02d' || weather.weather[0].icon === '02n') {
    //     icon = cloud_icon;
    // } else if (weather.weather[0].icon === '03d' || weather.weather[0].icon === '03n') {
    //     icon = cloud_icon;
    // } else if (weather.weather[0].icon === '04d' || weather.weather[0].icon === '04n') {
    //     icon = cloud_icon;
    // } else if (weather.weather[0].icon === '09d' || weather.weather[0].icon === '09n') {
    //     icon = rain_icon;
    // } else if (weather.weather[0].icon === '10d' || weather.weather[0].icon === '10n') {
    //     icon = rain_icon;
    // } else if (weather.weather[0].icon === '13d' || weather.weather[0].icon === '13n') {
    //     icon = snow_icon;
    // } else {
    //     icon = clear_icon;
    // }

    return (
        <div className="weather-box">
            <h1>{weather?.name}</h1>
            <h2>
                <WiThermometer />
                {Math.floor(temp)}℃/ {fahrenheit}℉
            </h2>
            <div>
                <h3>{weather?.weather[0].description}</h3>
                <img src={icon} alt="" />
            </div>
        </div>
    );
}

export default WeatherBox;
