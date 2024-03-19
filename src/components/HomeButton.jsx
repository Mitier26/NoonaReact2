import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
    const navigate = useNavigate();

    const gotoHome = () => {
        navigate('/');
    };

    return (
        <button className="home-btn" onClick={gotoHome}>
            🏠
        </button>
    );
};

export default HomeButton;
