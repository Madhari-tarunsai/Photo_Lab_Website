// src/Pages/Home/Home.jsx
import React from 'react';
import './Home.css';
import photo1 from "../../../assets/images/photo1.jpg"
import photo2 from "../../../assets/images/photo2.jpg"
import photo3 from "../../../assets/images/photo3.jpg"


const Home = () => {
  // Example array of couple portraits
  const portraits = [
    { id: 1, src:photo1, alt: 'Couple 1' },
    { id: 2, src:photo2, alt: 'Couple 2' },
    { id: 3, src:photo3, alt: 'Couple 3' },
    { id: 4, src: '/images/couple4.jpg', alt: 'Couple 4' },
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">Couples Portraits</h1>
      <p className="home-subtitle">
        Capturing the beautiful moments together
      </p>

      <div className="portrait-grid">
        {portraits.map((portrait) => (
          <div key={portrait.id} className="portrait-card">
            <img src={portrait.src} alt={portrait.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
