import React from 'react';
import '../../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        {new Date().getFullYear()} <a href="https://headsup.co" target="_blank" rel="noopener noreferrer">headsup</a>. All rights reserved. | Developed by Kulani Mabuza
      </p>
    </footer>
  );
};

export default Footer;