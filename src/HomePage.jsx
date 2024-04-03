import React from 'react';
import { useNavigate } from 'react-router-dom';
import BGMPlayer from './BGMPlayer';
import BattleBGM from './assets/sounds/PerituneMaterial_Dramatic4.mp3';
import DuckBGM from './assets/sounds/Fall Theme.mp3';
import ScissoersRockPaperPage from './projects/project01/page/ScissoersRockPaperPage';
import weatherImg from './assets/images/weather.jpg';
import duckImg from './assets/images/ducks.jpg';

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
        else if (page === 'reducks') BGMPlayer.playBGM(DuckBGM);
        navigate(`/${page}`);
    };

    return (
        <div className="home">
            <div className="project-holder">
                {/* <BGMPlayer bgmSrc={HomeSFX} /> */}
                <h1 className="title">누나와 리액트</h1>
                <div className="card-holder">
                    <button className="home-card" onClick={() => gotoPage('scissorsrockpaper')}>
                        <div className="project-num">1강</div>
                        <h4>가위 바위 보</h4>
                        <img src="https://openclipart.org/download/325653/rockscissorspaper.svg"></img>
                        {/* <span className="card-back"></span> */}
                    </button>

                    <button className="home-card" onClick={() => gotoPage('weather')}>
                        <div className="project-num">2강</div>
                        <h4>날 씨</h4>
                        <img src={weatherImg} alt="Weather"></img>
                        {/* <span className="card-back"></span> */}
                    </button>

                    <button className="home-card" onClick={() => gotoPage('brand')}>
                        <div className="project-num">3강</div>
                        <h4>H & M</h4>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="brand"></img>
                        {/* <span className="card-back"></span> */}
                    </button>

                    <button className="home-card" onClick={() => gotoPage('redux')}>
                        <div className="project-num">4강</div>
                        <h4>Redux</h4>
                        <img
                            src="https://velog.velcdn.com/images/otterp/post/83240bc6-08a4-4d38-b4ea-80c38bd68589/image.jpeg"
                            alt="redux"
                        ></img>
                        {/* <span className="card-back"></span> */}
                    </button>

                    <button className="home-card" onClick={() => gotoPage('reducks')}>
                        <div className="project-num">4-1강</div>
                        <h4>Re:ducks</h4>
                        <img src={duckImg} alt="brand"></img>
                        {/* <span className="card-back"></span> */}
                    </button>

                    <button className="home-card" onClick={() => gotoPage('phone')}>
                        <div className="project-num">5강</div>
                        <h4>전화부</h4>
                        <img
                            src="https://www.pngkey.com/png/full/37-370762_file-peo-phone-book-svg-wikimedia-commons-clipart.png"
                            alt="phone"
                        ></img>
                        {/* <span className="card-back"></span> */}
                    </button>

                    <button className="home-card" onClick={() => gotoPage('thunk')}>
                        <div className="project-num">6강</div>
                        <div className="new-project">NEW</div>
                        <h4>Thunk</h4>
                        <img
                            src="https://miro.medium.com/v2/resize:fit:1400/1*5FcvZufrMDzs1ef63NjhXw.jpeg"
                            alt="thunk"
                        ></img>
                        {/* <span className="card-back"></span> */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
