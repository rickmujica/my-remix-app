import { Outlet, Routes, Route, Link } from 'react-router';
import DashboardPage from './pages/DashboardPage';
import NewsPage from './pages/NewsPage';
import BlogPage from './pages/BlogPage';

const OtherRoutesLayout = () => (
  <div className="main-container">
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/other-routes/news">News</Link></li>
          <li><Link to="/other-routes/blog">Blog</Link></li>
          <li><Link to="/other-routes/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
    </header>
    <Routes>
      <Route index element={<NewsPage />} />
      <Route path="news" element={<NewsPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
    </Routes>
    <div className="child-container">
      <Outlet />
    </div>
  </div>
);

export default OtherRoutesLayout;
