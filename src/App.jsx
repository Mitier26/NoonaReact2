// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScissoersRockPaperPage from './projects/project01/page/ScissoersRockPaperPage';
import HomePage from './HomePage';
import ScissorsRPClass from './projects/project01/page/ScissorsRPClass';
import WeatherPage from './projects/project02/page/WeatherPage';
import BrandPage from './projects/project03/page/BrandPage';
import ReduxPage from './projects/project04/page/ReduxParent';
import ReducksPage from './projects/project04-2/page/Reducks';
import PhoneBookPage from './projects/project05/page/PhoneBook';
import ReduxThunkPage from './projects/project06/page/BrandPage';
import NewTecPage from './projects/project07/page/BrandPage';
import ReactQueryPage from './projects/project08/page/ReactQueryRoute';
import NetflixRouter from './projects/project09/page/NetflixRouter';

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
                <Route path="/phone" element={<PhoneBookPage />} />
                <Route path="/thunk/*" element={<ReduxThunkPage />} />
                <Route path="/newTec/*" element={<NewTecPage />} />
                <Route path="/query/*" element={<ReactQueryPage />} />
                <Route path="/netflix/*" element={<NetflixRouter />} />
            </Routes>
        </div>
    );
}

export default App;
