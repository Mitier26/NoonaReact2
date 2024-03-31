import React from 'react';
import { useSelector } from 'react-redux';

const DuckCoin = () => {
    const coin = useSelector((state) => state.user.coin);

    return (
        <div className="duck-coin">
            <h2>{coin}</h2>
            <p>Duck Coins</p>
        </div>
    );
};

export default DuckCoin;
