import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ProductAll from './ProductAll';
import Login from './Login';
import PrivateRoute from '../route/PrivateRoute';
import Navbar from '../components/Navbar';
import store from '../redux/store';
import { Provider } from 'react-redux';
import HomeButton from '../../../HomeButton';

const BrandPage = () => {
    const [authenticate, setAuthenticate] = useState(false);
    return (
        <Provider store={store}>
            <HomeButton />
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductAll />} />
                <Route path="login/" element={<Login />} />
                <Route path="product/:id/" element={<PrivateRoute />} />
            </Routes>
        </Provider>
    );
};

export default BrandPage;
