
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Home from './Home';
import Services from './Services';

function About(props){
    return(
        
 <section className="about" id="about">
      <div className="image">
        <img src="https://tse4.mm.bing.net/th?id=OIP.XYXFd23gH6uo7QdIoo4ehQHaHh&pid=Api&P=0" alt="" />
      </div>
      <div className="content">
        <h3><span className="yellow">Order</span> anytime and anywhere</h3>
        <p>
          Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
          porttitor consectetur pretium. Euismod imperdiet pellentesque cursus
          in netus.
        </p>
        <a href="#" className="btn">Make an Offer</a>
      </div>
    </section>

    )
}

Header.propTypes={

}
export default About