import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
    let navigate = useNavigate();
    const showDetail = () => {
        navigate(`/newTec/product/${item.id}`);
    };
    return (
        <div className="card" onClick={showDetail}>
            <img src={item?.img} alt="" />
            <div className="card-info">
                <div>{item?.choice === true ? 'Conscious choice' : '\u00A0'} </div>
                <div>{item?.title}</div>
                <div>￦{item?.price}</div>
                <div>{item?.new === true ? '신제품' : '\u00A0'}</div>
            </div>
        </div>
    );
};

export default ProductCard;
