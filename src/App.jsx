import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScissoersRockPaperPage from './projects/project01/page/ScissoersRockPaperPage';
import HomePage from './HomePage';
import ScissorsRPClass from './projects/project01/page/ScissorsRPClass';
import WeatherPage from './projects/project02/page/WeatherPage';
import BrandPage from './projects/project03/page/BrandPage';
import ProductAll from './projects/project03/page/ProductAll';
import Login from './projects/project03/page/Login';
import ProductDetail from './projects/project03/page/ProductDetail';
import { useState } from 'react';
import PrivateRoute from './projects/project03/route/PrivateRoute';

function App() {
    const [authenticate, setAuthenticate] = useState(false);
    return (
        <div>
            <Routes>
                <Route path="/*" element={<HomePage />} />
                <Route path="/scissorsrockpaper" element={<ScissorsRPClass />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/weather" element={<WeatherPage />} />
                {/* <Route path="/brand" element={<BrandPage />} /> */}
                <Route path="/brand" element={<ProductAll />} />
                <Route path="/brand/login/" element={<Login setAuthenticate={setAuthenticate} />} />
                <Route path="/brand/product/:id/" element={<PrivateRoute authenticate={authenticate} />} />
            </Routes>
        </div>
    );
}

export default App;
