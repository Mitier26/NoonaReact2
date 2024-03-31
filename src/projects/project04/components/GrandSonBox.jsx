import React from 'react';
import { useSelector } from 'react-redux';

const GrandSonBox = () => {
    const count = useSelector((state) => state.count);
    return <div>GrandSonBox{count} 에요</div>;
};

export default GrandSonBox;
