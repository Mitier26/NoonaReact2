import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useEffect, useRef } from 'react';
// import Jjajjan from '../assets/jjajang.mp3';
// import BGMPlayer from './BGMPlayer';

const HomeButton = () => {
    // const bgm = useRef(null);
    const navigate = useNavigate();

    const gotoHome = () => {
        // console.log(bgm.current);
        // if (bgm.current) {
        //     bgm.current.pause();
        //     bgm.current = null;
        // }
        // bgm.current = new Audio(Jjajjan);
        // bgm.current.volume = 0.3;
        // bgm.current.play();
        navigate('/');
    };

    return (
        <button className="home-btn" onClick={gotoHome}>
            🏠
        </button>
    );
};

export default HomeButton;
