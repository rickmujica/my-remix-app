import { Link } from "react-router";

const HomePage = () => (
  <div className="main-container">
    <div className="hero-section">
      <h1 className="hero-title">Home</h1>
      <Link to='/about' className="hero-link">About us</Link>
      <Link to='/other-routes' className="hero-link">See other links</Link>
    </div>
  </div>
);
  
export default HomePage;
  