import './App.css';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import ScissoersRockPaperPage from './projects/project01/page/ScissoersRockPaperPage';
import HomePage from './projects/project01//page/HomePage';
import ScissorsRPClass from './projects/project01//page/ScissorsRPClass';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/scissorsrockpaper" element={<ScissorsRPClass />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;
