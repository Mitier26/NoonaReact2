import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Item = ({ item, index }) => {
    const coin = useSelector((state) => state.user.coin);
    const dispatch = useDispatch();

    const upgrade = (item) => {
        console.log(item.item.increase);
        if (coin >= item.item.cost) {
            dispatch({ type: 'ITEM_UPGRADE', payload: { level: 1, index } });
            dispatch({ type: 'DECREASE_COINS', payload: { num: item.item.cost } });
            dispatch({ type: 'INCREASE_LEVEL', payload: { click: item.item.increase } });
        }
    };

    return (
        <div>
            <button item={item} onClick={() => upgrade({ item })} className="upgrade-item">
                <div className="upgrade-title">
                    <p>{item.title}</p>
                    <p>{item.level}Lv</p>
                </div>
                <div className="upgrade-info">
                    <img src={item.image} alt="" />
                    <div>
                        <p>증가량: {item.increase}</p>
                        <p>비용: {item.cost}</p>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default Item;
