import { Routes, Route } from 'react-router-dom';

import { MainLayout } from '../layouts';
import LandingPage from '../app/pages/LandingPage';
import HomeTeethWhitening from '../app/pages/HomeTeethWhitening';

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/clareamento-dental-caseiro" element={<HomeTeethWhitening />} />
            </Route>
        </Routes>
    );
}