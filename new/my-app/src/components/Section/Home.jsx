import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import App1 from '../../App1';
import Login from '../Login/login';
function Home(props){
    return(
        
        <section className="home" id="home">
        <div className="content">
          <h1>Order Your Product <span className="yellow">Easier & Faster.</span></h1>
          <p>
            House of Taste is a leading global online food delivery marketplace,
            connecting consumers and restaurants through its platform in 24
            countries.
          </p>
           <a href="/login" className="home-btn">Go to Menu</a>
         
          
        </div>
        <div className="image">
          <img src="https://tse2.mm.bing.net/th?id=OIP.yd_48iNNNatEsWDqbYEYJwHaD4&pid=Api&P=0" alt="" />
        </div>
      </section>
        
    )
}


export default Home;