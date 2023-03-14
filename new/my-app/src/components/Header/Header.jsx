import React from 'react';
import PropTypes from 'prop-types';


function Header(props){
    return(
        
 <header className="header">
      <a href="/" className="logo">House of <span className="yellow">Taste</span></a>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </nav>

     
      <div className="hamburger">
        <img src="assets/images/grid-outline.svg" alt="" />
      </div>
    </header>
        
    )
}

export default Header;