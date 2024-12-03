import React from 'react';
import '../../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        {new Date().getFullYear()} <a href="https://headsup.co" target="_blank" rel="noopener noreferrer">HeadsUp</a>. All rights reserved. Developed by <a href="https://github.com/MrMabuzaKK" target="_blank" rel="noopener noreferrer">Kulani Mabuza</a>
      </p>
    </footer>
  );
};

export default Footer;