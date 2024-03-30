import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ProductAll from './ProductAll';
import Login from './Login';
import PrivateRoute from '../route/PrivateRoute';
import Navbar from '../components/Navbar';

const BrandPage = () => {
    const [authenticate, setAuthenticate] = useState(false);
    return (
        <div>
            <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
            <Routes>
                <Route
                    path="/"
                    element={<ProductAll authenticate={authenticate} setAuthenticate={setAuthenticate} />}
                />
                <Route path="login/" element={<Login setAuthenticate={setAuthenticate} />} />
                <Route path="product/:id/" element={<PrivateRoute authenticate={authenticate} />} />
            </Routes>
        </div>
    );
};

export default BrandPage;
