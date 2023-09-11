import React from 'react'
import './Topbar.css'
import Logo from '../Assets/Left Side.png'
import {  } from 'react-bootstrap';

function Topbar() {
  return (
    <div className="Topbar">
        <div className="img-container">
            <img src={Logo} alt="logo" />
        </div>
        <div className="empty-div">
        </div>
        <div className="links-container">
            <ul className='all-links'>
                <ul><a href="#">Calculator</a></ul>
                <ul><a href="#">Navigation</a></ul>
                <ul><a href="#">About</a></ul>
            </ul>
        </div>
    </div>
  )
}

export default Topbar