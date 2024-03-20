import './App.css';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import ScissoersRockPaperPage from './page/ScissoersRockPaperPage';
import Homepage from './page/Homepage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/scissorsrockpaper" element={<ScissoersRockPaperPage />} />
            </Routes>
        </div>
    );
}

export default App;
