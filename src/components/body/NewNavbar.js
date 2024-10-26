import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import logo from '../assets/PHMVertical.png'
import Testimonials from './Testimonials';
import '../styles/NewNavbar.css'; 
import ContactUs from './ContactUs';
import WhyChooseUs from './WhyChooseUs';


const NewNavbar = () => {
  return (
    <Router>
       <nav className="navbar">
       <div className="logo">
        <img src={logo} alt="logo" className="App-logo" />	

        </div>
        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/about" className="link">About</Link>
          {/* <Link to="/testimonials" className="link">Testimonials</Link> */}
          <Link to="/contact" className="link">Contact Us</Link>
        </div>
      

      {/* Define routes here */}
      <Routes>
        <Route path="/about"  element= {<Testimonials />}/>
        
        <Route path="/" >
          {/* <h1>Welcome to Home Page</h1> */}
        </Route>
        <Route path="/contact" element={<ContactUs/>}/>
          {/* <h1>Contact Us Page</h1> */}
      </Routes>
      </nav>
    </Router>

  );
};



export default NewNavbar;
