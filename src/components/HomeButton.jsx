import React from 'react';
import { useNavigate } from 'react-router-dom';
import BGMPlayer from './BGMPlayer';
// import { useEffect, useRef } from 'react';
import Jjajjan from '../assets/jjajang.mp3';
// import BGMPlayer from './BGMPlayer';

const HomeButton = () => {
    const navigate = useNavigate();

    const gotoHome = () => {
        BGMPlayer.playBGM(Jjajjan);
        navigate('/');
    };

    return (
        <button className="home-btn" onClick={gotoHome}>
            🏠
        </button>
    );
};

export default HomeButton;
