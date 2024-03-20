import { useRef, useEffect } from 'react';

const BGMPlayer = ({ bgmSrc }) => {
    const bgm = useRef(null);

    useEffect(() => {
        if (!bgm.current) {
            bgm.current = new Audio(bgmSrc);
            bgm.current.volume = 0.3;
            bgm.current.play();
        }

        return () => {
            bgm.current.pause();
            bgm.current = null;
        };
    }, [bgmSrc]);

    return null;
};

export default BGMPlayer;
