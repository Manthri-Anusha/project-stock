import React from 'react';
import Navbar from './Navbar';
import '../styles/HomePage.css';
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <Navbar />
      <div className="main-content">
        <div className="hero-section">
          <h1>Trade Smarter, Grow Faster with SB Stocks</h1>
          <p>Join the world's most intuitive stock trading platform. Real-time data, powerful tools, and expert insights to maximize your trading potential.</p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={() => navigate('/register')}>Start Trading Today</button>
            <button className="cta-button secondary" onClick={() => navigate('/login')}>Explore Our Platform</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;