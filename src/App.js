import './App.css';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import ScissoersRockPaperPage from './page/ScissoersRockPaperPage';
import HomePage from './page/HomePage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/scissorsrockpaper" element={<ScissoersRockPaperPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;
