import React from 'react';
import { Link } from 'react-router-dom';
import HomeSFX from '../assets/coalnoo.mp3';
import BGMPlayer from '../components/BGMPlayer';

const HomePage = () => {
    // const bgm = useRef(new Audio(BattleBGM));

    // function playBGM() {
    //     bgm.current.volume = 0.3;
    //     bgm.current.play();
    // }

    return (
        <div className="home">
            {/* <BGMPlayer bgmSrc={HomeSFX} /> */}
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

export default HomePage;
