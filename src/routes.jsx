import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OtherRoutesLayout from './OtherRoutesLayout';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="other-routes/*" element={<OtherRoutesLayout />} />
    </Routes>
  </Router>
);

export default AppRoutes;
