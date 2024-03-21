import React from 'react';
import { useNavigate } from 'react-router-dom';
import BGMPlayer from '../../../BGMPlayer';
import Jjajjan from '../assets/sounds/jjajang.mp3';

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
