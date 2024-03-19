import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="home">
            <h1 className="title">누나와 리액트</h1>
            <div className="card-holder">
                <Link className="card" to="/scissorsrockpaper">
                    <h4>가위 바위 보</h4>
                    <img src="https://openclipart.org/download/325653/rockscissorspaper.svg"></img>
                    <span className="card-back"></span>
                </Link>
            </div>
        </div>
    );
};

export default Homepage;
