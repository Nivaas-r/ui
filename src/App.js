import React from 'react';
import "./components/styles/Main.css";

import Footer from "./components/body/Footer";
// import Navbar from "./components/body/Navbar";
import OurDoctors from "./components/body/OurDoctors";
import Services from "./components/body/Services";
import Appointment from "./components/body/Appointment";
import BannerOne from "./components/body/BannerOne";
import SafetyMeasures from './components/body/SafetyMeasures'
import WhyChooseUs from "./components/body/WhyChooseUs";
// import LatestNews from "./components/body/LatestNews";
import UserReviews from "./components/body/UserReviews";
import ContactUs from "./components/body/ContactUs";
// import NewNavbar from './components/body/NewNavbar';


// import { BrowserRouter, Route, Routes } from 'react-router-dom';
  

function App() {
  
  return (


    <div> 
     {/* <div><React.Fragment>
     <Navbar/>
   </React.Fragment></div> */}
  {/* <NewNavbar/> */}
  <BannerOne/>

  <SafetyMeasures />
  <WhyChooseUs />

   <OurDoctors/>
   <Services/>
      
      <Appointment/>
      <UserReviews/>
             {/* <LatestNews/>  */}
      <ContactUs/>
      <Footer/>
      
   
    </div>
   
  );
}

export default App;
 