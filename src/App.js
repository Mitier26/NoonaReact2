import './App.css';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import ScissoersRockPaperPage from './page/ScissoersRockPaperPage';

function App() {
    return (
        <div>
            <h1>누나와 리액트</h1>
            <Routes>
                <Route path="/scissorsrockpaper" element={<ScissoersRockPaperPage />} />
            </Routes>
            <Link to="/scissorsrockpaper">가위바위보</Link>
        </div>
    );
}

export default App;
