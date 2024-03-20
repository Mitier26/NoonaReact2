import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Jjajjan from '../assets/jjajang.mp3';
import BGMPlayer from './BGMPlayer';

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
