import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Duck = () => {
    // 클릭하면 코인이 증가 되어야 한다.
    // 코인이 증가하기 위해서는 dispatch 를 해야 한다.
    const dispatch = useDispatch();
    const click = useSelector((state) => state.user.click);

    const getCoin = () => {
        dispatch({ type: 'INCREASE_COINS', payload: { num: click } });
    };

    return (
        <div onClick={getCoin} className="duck">
            <div className="sprite-animation"></div>
        </div>
    );
};

export default Duck;
