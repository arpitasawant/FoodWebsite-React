import React from 'react';
import PropTypes from 'prop-types';


function Header(props){
    return(
      <>
      <div class="preloader">
      <img src="https://tse1.mm.bing.net/th?id=OIP.hEEhrA7iwF6PFjYOXa3SFQAAAA&pid=Api&P=0" alt="" />
    </div>

 <header className="header">
      <a href="/" className="logo">House of <span className="yellow">Taste</span></a>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
        <a href="" className="btn">Make an Order</a>
      </nav>

     
      <div className="hamburger">
        <img src="assets/images/grid-outline.svg" alt="" />
      </div>
    </header>
        </>
    )
}

Header.propTypes={

}
export default Header