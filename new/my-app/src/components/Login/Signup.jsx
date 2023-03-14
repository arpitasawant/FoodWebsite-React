import React, { useState } from 'react';
import { NavLink,useNavigate} from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
function Signup(props){
    const navigate=useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mnum, setMnum] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(name);
      try {
        const response = await axios.post('/home/signup', { name, email,mnum, password });
        console.log(response.data); // success message or JWT
        navigate('/main');
      } catch (error) {
        console.error(error);
      }
    };
    return(
		<div className="container">
        <form className="signup-form" onSubmit={handleSubmit}>
            <h2 >Sign up</h2>
            <hr/>
            <br/>
            <br/>
            Name:<input type="text" placeholder="Enter  name"  id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}/>
            Email:<input type="email" placeholder="Enter email"  id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
            Mo. number:<input type="text" placeholder="Enter number"  id="mnum"
          value={mnum}
          onChange={(e) => setMnum(e.target.value)}/>

            Password?:<input type="password" placeholder="Enter password"  id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
            <button className="signup"><a href="">Sign up</a></button>
            <br/>
            <br/>
            <hr/>
            <br/>
            
        </form>
    </div>
    )
}

export default Signup