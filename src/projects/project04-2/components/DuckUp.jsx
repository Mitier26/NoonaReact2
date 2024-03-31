import React from 'react';
import Item from './Item';
import { useSelector } from 'react-redux';

const DuckUp = () => {
    const getItems = useSelector((state) => state.items);
    const items = getItems.items;
    return (
        <div className="item-holder">
            {items.map((item, index) => (
                <Item key={index} item={item} index={index} />
            ))}
        </div>
    );
};

export default DuckUp;
