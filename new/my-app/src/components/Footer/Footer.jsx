import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Home from '../Section/Home';
import Services from '../Section/Services';
import About from '../Section/About';

function Footer(props){
    return(
        <footer className="footer">
        <div className="top">
          <div className="content">
            <a href="" className="logo">House of <span className="yellow">Taste</span></a>
            <p>
              Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
              porttitor consectetur pretium. Euismod imperdiet
            </p>
          </div>
  
          <div className="links">
            <div className="link">
              <h4>Contact Information</h4>
              <div>
                <img src="assets/images/location-cross.svg" alt="" />
                <span>122,Albert St, Port Melbourne,Vic 3207.</span>
              </div>
              <div>
                <img src="assets/images/sms-tracking.svg" alt="" />
                <span>deliveroo@gmail.com</span>
              </div>
            </div>
  
            <div className="link">
              <h4>Quick Links</h4>
              <a href="#">Services</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">Download</a>
            </div>
  
            <div className="link">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Term of Use</a>
              <a href="#">Conditions</a>
              <a href="#">Location</a>
            </div>
  
            <div className="link">
              <h4>Connect with Us</h4>
              <div>
                <img src="assets/images/instagram.svg" alt="" />
                <span>Instagram</span>
              </div>
              <div>
                <img src="assets/images/twitter.svg" alt="" />
                <span>Twitter</span>
              </div>
              <div>
                <img src="assets/images/facebook.svg" alt="" />
                <span>Facebook</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>Copyright © 2023 
            House of Taste All rights reserved.</p>
        </div>
      </footer>
    )
}

Header.propTypes={

}
export default Footer