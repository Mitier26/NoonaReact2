import React from 'react';
import { WiCelsius } from 'react-icons/wi';
import { WiFahrenheit } from 'react-icons/wi';

const WeatherBox = ({ weather }) => {
    const temp = weather.main.temp;

    const fahrenheit = Math.floor((9 / 5) * temp + 32);

    return (
        <div className="weather-box">
            <div>{weather?.name}</div>
            <h2>
                {Math.floor(temp)}
                <WiCelsius /> / {fahrenheit}
                <WiFahrenheit />
            </h2>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    );
};

export default WeatherBox;
