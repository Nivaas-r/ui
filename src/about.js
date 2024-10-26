import React from 'react';
import OurDoctors from './components/body/OurDoctors';
import Services from './components/body/Services';
import SafetyMeasures from './components/body/SafetyMeasures';
import Footer from './components/body/Footer';
import ContactUs from './components/body/ContactUs';


function About() {
  
    return (
  
  
      <div> 
      
     <SafetyMeasures />
     <Services/>
        <OurDoctors/>
        <ContactUs/>
        <Footer/>
        
     
      </div>
     
    );
  }
  
  export default About;