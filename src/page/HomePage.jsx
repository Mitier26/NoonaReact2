import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import HomeSFX from '../assets/coalnoo.mp3';
import BGMPlayer from '../components/BGMPlayer';
import BattleBGM from '../assets/PerituneMaterial_Dramatic4.mp3';

const Homepage = () => {
    // const bgm = useRef(null);

    const navigate = useNavigate();

    const gotoGame = () => {
        // if (bgm.current) {
        //     bgm.current.pause();
        //     bgm.current = null;
        // }

        // bgm.current = new Audio(BattleBGM);
        // bgm.current.volume = 0.3;
        // bgm.current.play();
        navigate('/scissorsrockpaper');
    };

    return (
        <div className="home">
            {/* <BGMPlayer bgmSrc={HomeSFX} /> */}
            <h1 className="title">누나와 리액트</h1>
            <div className="card-holder">
                <button className="card" onClick={gotoGame}>
                    <h4>가위 바위 보</h4>
                    <img src="https://openclipart.org/download/325653/rockscissorspaper.svg"></img>
                    {/* <span className="card-back"></span> */}
                </button>
            </div>
        </div>
    );
};

export default Homepage;
