import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Navbar.css';

const Navbar = () => {
  const handleImageError = (e) => {
    console.error('Error loading logo:', e);
    // Fallback to text if image fails to load
    e.target.style.display = 'none';
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="nav-logo">
          <img 
            src="/images/headsupLogo.png" 
            alt="Headsup Logo" 
            className="logo"
            onError={handleImageError}
          />
        </Link>
        <div className="nav-links">
          <Link to="/books">Books</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/houses">Houses</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
