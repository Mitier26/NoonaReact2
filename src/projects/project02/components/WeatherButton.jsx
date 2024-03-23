import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, selected, setCity }) => {
    return (
        <div className="weather-btn-group">
            <Button variant={selected == '' ? 'danger' : 'warning'} onClick={() => setCity('')}>
                Current Location
            </Button>
            {cities.map((city, index) => (
                <Button variant={selected === city ? 'danger' : 'warning'} key={index} onClick={() => setCity(city)}>
                    {city}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButton;
