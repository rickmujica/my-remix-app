import { Link } from "react-router";

const AboutPage = () => (
  <div className="main-container">
    <div className="hero-section">
      <h1 className="hero-title">About Remix</h1>
      <Link to='/' className="hero-link">Go to Home</Link>
    </div>
  </div>
);
  
export default AboutPage;
  