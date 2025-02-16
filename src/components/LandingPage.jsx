import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/products');
  };

  return (
    <div 
      className="landing-page" 
      style={{ backgroundImage: `url('/assets/images/pexels-photo-807598.jpeg')` }}
    >
      <header className="landing-header">
        <h1>Paradise Nursery</h1>
      </header>
      <div className="landing-content">
        <p>Willkommen bei Paradise Nursery – entdecken Sie unsere exklusive Auswahl an Zimmerpflanzen!</p>
        <button onClick={handleStart}>Erste Schritte</button>
      </div>
    </div>
  );
}

export default LandingPage;
