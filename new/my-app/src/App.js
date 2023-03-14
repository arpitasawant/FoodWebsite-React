import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
}  from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Section/Home';
import Services from './components/Section/Services';
import About from './components/Section/About';
import Footer from './components/Footer/Footer';
import Preloader from './components/Header/Preloader';
import Login from './components/Login/login';
import Signup from './components/Login/Signup';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  
    return (
      <><Routes>
    <Route exact path='/home'
    element={<Header/>}/>
     
    <Route exact path='/ho'
    element={<Home/>}/>

    <Route exact path='/login'
    element={<Login/>}/>
       <Route exact path='/main'
    element={<Signup/>}/>
    <Route exact path='/signup'
    element={<Signup/>}/>
    </Routes>
  
   <Header/>  
   <Home/>
   <Services/>
   <About/>
   <Footer/> 
       </>
    );
  };

export default App;
