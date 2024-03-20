import { useRef, useEffect } from 'react';

const BGMPlayer = ({ bgmSrc }) => {
    const bgm = useRef(null); // 초기값을 null로 설정

    useEffect(() => {
        if (!bgm.current) {
            bgm.current = new Audio(bgmSrc); // 새로운 Audio 객체 생성
            bgm.current.volume = 0.3;
            bgm.current.play();
        }

        return () => {
            // 컴포넌트가 언마운트될 때 음악 정지 및 해제
            bgm.current.pause();
            bgm.current = null;
        };
    }, [bgmSrc]); // bgmSrc가 변경될 때마다 실행

    return null;
};

export default BGMPlayer;
