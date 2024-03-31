import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScissoersRockPaperPage from './projects/project01/page/ScissoersRockPaperPage';
import HomePage from './HomePage';
import ScissorsRPClass from './projects/project01/page/ScissorsRPClass';
import WeatherPage from './projects/project02/page/WeatherPage';
import BrandPage from './projects/project03/page/BrandPage';
import ReduxPage from './projects/project04/page/ReduxParent';
import ReducksPage from './projects/project04-2/page/Reducks';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/scissorsrockpaper" element={<ScissorsRPClass />} />
                {/* <Route path="*" element={<Navigate to="/" />} /> */}
                <Route path="/weather" element={<WeatherPage />} />
                <Route path="/brand/*" element={<BrandPage />} />
                <Route path="/redux" element={<ReduxPage />} />
                <Route path="/reducks" element={<ReducksPage />} />
            </Routes>
        </div>
    );
}

export default App;
