import React, { useState } from 'react';
import axios from 'axios';
import { NavLink,useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Login() {
  const navigate=useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/home/signin', { email, password });
      console.log(response.data); // success message or JWT
      navigate('/main');
    } catch (error) {
      console.error(error);
    }
  };
    return(
	<div className="container">
        <form className="login-form" onSubmit={handleSubmit}>
            <h2 >Login</h2>
            <hr/>
            <br/>
            <br/>
            Name:<input type="text" placeholder="Enter name"/>
            Email:<input type="email" placeholder="Enter email"/>
            Password:<input type="password" placeholder="Enter password"/>
            <button className="login"><a href="">Login</a></button>
            <br/>
            <br/>
            <hr/>
            <br/>
            <div className="forget">
            <div><p>Dont have an account?</p>
             <a href="/signup">Click here</a></div>
            </div>
        </form>
   
        <div/></div>
    )
}



export default Login;   