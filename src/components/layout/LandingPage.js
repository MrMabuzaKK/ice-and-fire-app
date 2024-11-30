import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Ice and Fire</h1>
      <p>Explore the world of Game of Thrones through our comprehensive database of books, characters, and houses.</p>
      <div className="landing-links">
        <Link to="/books" className="landing-link">Browse Books</Link>
        <Link to="/characters" className="landing-link">Meet Characters</Link>
        <Link to="/houses" className="landing-link">Discover Houses</Link>
      </div>
      <div className="slider-container">
        <img src="/images/got-1.jpg" alt="Game of Thrones Scene 1" className="slider-image" />
        <img src="/images/got-2.jpg" alt="Game of Thrones Scene 2" className="slider-image" />
        <img src="/images/got-3.jpg" alt="Game of Thrones Scene 3" className="slider-image" />
      </div>
    </div>
  );
};

export default LandingPage;
