import { Link } from "react-router";

const NewsPage = () => (
  <div className="main-container">
    <div className="hero-section">
      <h1 className="hero-title">News</h1>
      <Link to='/' className="hero-link">Go to Home</Link>
    </div>
  </div>
);
  
export default NewsPage;
  