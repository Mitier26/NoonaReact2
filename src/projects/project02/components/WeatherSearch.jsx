import React from 'react';
import { FaSearchLocation } from 'react-icons/fa';

const WeatherSearch = ({ cities, setCities, setCity }) => {
    const handleKeyDown = (event) => {
        if (event.key == 'Enter') {
            searchCity();
        }
    };

    const searchCity = () => {
        const cityName = document.getElementById('search').value;
        const regex = /^[a-z]+$/;

        if (cityName && regex.test(cityName)) {
            if (cities.length < 3) {
                if (!cities.includes(cityName)) {
                    setCities((prevCities) => [...prevCities, cityName]);
                }

                setCity(cityName);
            } else {
                if (!cities.includes(cityName)) {
                    setCities((prevCities) => {
                        const newCities = [...prevCities];
                        newCities.shift();
                        newCities.push(cityName);
                        return newCities;
                    });
                }

                setCity(cityName);
            }
        }
    };

    return (
        <div className="search-city">
            <input type="text" placeholder="Search...." id="search" onKeyUp={handleKeyDown}></input>
            <FaSearchLocation id="search-btn" onClick={() => searchCity()} />
        </div>
    );
};

export default WeatherSearch;
