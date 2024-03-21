import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeSFX from '../assets/sounds/coalnoo.mp3';
import BGMPlayer from '../components/BGMPlayer';
import BattleBGM from '../assets/sounds/PerituneMaterial_Dramatic4.mp3';

const HomePage = () => {
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

        BGMPlayer.playBGM(BattleBGM);
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

export default HomePage;
