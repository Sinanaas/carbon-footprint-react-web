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
    <>

      {/* <div className={`Topbar ${showMobileMenu ? 'mobile-menu-open' : ''}`}> */}
      <div className='Topbar container w-100 d-flex justify-content-between p-3'>
        <div className="img-container">
          <img src={Logo} alt="logo" />
        </div>
        <div className={`links-container ${showMobileMenu ? 'show' : ''}`} onClick={closeMobileMenu}>
          <ul className={`all-links ${showMobileMenu ? 'mobile-menu-open' : ''}`}>
            <li><a href="#">Calculator</a></li>
            <li><a href="#">Navigation</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div className="bg-success mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`bar ${showMobileMenu ? 'close' : ''}`}></div>
          <div className={`bar ${showMobileMenu ? 'close' : ''}`}></div>
          <div className={`bar ${showMobileMenu ? 'close' : ''}`}></div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Topbar;
