import React, { useState } from 'react';
import './Topbar.css';
import Logo from '../Assets/Left Side.png';
import { Container } from 'react-bootstrap';

function Topbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className={`Topbar ${showMobileMenu ? 'mobile-menu-open' : ''}`}>
      <div className="img-container">
        <img src={Logo} alt="logo"/>
      </div>
      <div className={`links-container ${showMobileMenu ? 'show' : ''}`} onClick={closeMobileMenu}>
        <ul className={`all-links ${showMobileMenu ? 'mobile-menu-open' : ''}`}>
          <li><a href="#" style={{ fontSize: '1.2rem' }}>Calculator</a></li>
          <li><a href="#" style={{ fontSize: '1.2rem' }}>Navigation</a></li>
          <li><a href="#" style={{ fontSize: '1.2rem' }}>About</a></li>
        </ul>
      </div>
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <div className={`bar ${showMobileMenu ? 'close' : ''}`}></div>
        <div className={`bar ${showMobileMenu ? 'close' : ''}`}></div>
        <div className={`bar ${showMobileMenu ? 'close' : ''}`}></div>
      </div>
    </div>
  );
}

export default Topbar;
