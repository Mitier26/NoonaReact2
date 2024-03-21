import './App.css';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import ScissoersRockPaperPage from './projects/project01/page/ScissoersRockPaperPage';
import HomePage from './HomePage';
import ScissorsRPClass from './projects/project01/page/ScissorsRPClass';
import WeatherPage from './projects/project02/page/WeatherPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/scissorsrockpaper" element={<ScissorsRPClass />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/weather" element={<WeatherPage />} />
            </Routes>
        </div>
    );
}

export default App;
