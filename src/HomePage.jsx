import React from 'react';
import { useNavigate } from 'react-router-dom';
import BGMPlayer from './BGMPlayer';
import BattleBGM from './assets/sounds/PerituneMaterial_Dramatic4.mp3';
import ScissoersRockPaperPage from './projects/project01/page/ScissoersRockPaperPage';
import weatherImg from './assets/images/weather.jpg';

const HomePage = () => {
    // const bgm = useRef(null);

    const navigate = useNavigate();

    const gotoPage = (page) => {
        // if (bgm.current) {
        //     bgm.current.pause();
        //     bgm.current = null;
        // }

        // bgm.current = new Audio(BattleBGM);
        // bgm.current.volume = 0.3;
        // bgm.current.play();

        if (page === 'scissorsrockpaper') BGMPlayer.playBGM(BattleBGM);
        navigate(`/${page}`);
    };

    return (
        <div className="home">
            <div className="project-holder">
                {/* <BGMPlayer bgmSrc={HomeSFX} /> */}
                <h1 className="title">누나와 리액트</h1>
                <div className="card-holder">
                    <button className="home-card" onClick={() => gotoPage('scissorsrockpaper')}>
                        <h4>가위 바위 보</h4>
                        <img src="https://openclipart.org/download/325653/rockscissorspaper.svg"></img>
                        {/* <span className="card-back"></span> */}
                    </button>

                    <button className="home-card" onClick={() => gotoPage('weather')}>
                        <h4>날 씨</h4>
                        <img src={weatherImg} alt="Weather"></img>
                        {/* <span className="card-back"></span> */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;