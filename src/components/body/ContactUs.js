import React, { useState } from 'react';
import hospitalLogo from '../assets/PHMLogoDualtone.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhone, faMapMarkerAlt, faAddressBook,  faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import "../styles/ContactUs.css"


const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false); 

  function handleInputChange(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const isValidEmail = newEmail.match(/^[\w-.]+@[\w-.]+\.[a-zA-Z]{2,4}$/);
    setIsEmailValid(isValidEmail);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isEmailValid) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`Error subscribing to mailing list: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Subscription successful:', data); 
      alert(`Thanks for subscribing to our mailing list, ${email}!`);
      setEmail('');
    } catch (error) {
      console.error('Error:', error.message);
      alert('There was an error subscribing to the mailing list. Please try again later.');
    } finally {
      setIsSubmitting(false); 
    }
  };
  return (
    <section className="about-us">
      <h2>Contact Us</h2>
      <div className='content'>

        {/* <p>At our hospital, we are dedicated to providing exceptional medical care to our patients. 
        Our team of highly skilled and experienced doctors and staff are committed to your 
        well-being. We utilize advanced technology and personalized treatment plans to ensure 
        you receive the best possible care. We prioritize patient comfort and communication, 
         creating a supportive and healing environment.</p> */}


         
                {/* <img src={hospitalLogo} alt="Hospital Logo" className="hospital-logo" /> */}
         {/* <div className='links'>
          <h5>Quick links</h5>
          <a href="/">Home </a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/latest news">Latest News</a>
          <a href="/admin">Admin</a>

        </div> */}
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +918688768374
          </p>
          <p>
            <FontAwesomeIcon icon={faAddressBook} />  Karanai Main Rd, opposite to Vembuli Amman street, Karanai, Chennai, Tamil Nadu 603103 
          </p>  </div>
          <div>
          <h3>Locate Us</h3>
          <a href="https://maps.app.goo.gl/GMzLwuAQoTEpJLqo6" target="_blank" rel="noreferrer" className="map-link">
            <FontAwesomeIcon icon={faMapMarkerAlt} />  View Location on Map
          </a>
          </div>

        <div className="mailing-list-signup">
        <h3>Subscribe Here</h3>      
        <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleInputChange}
          className={!isEmailValid ? 'invalid-email' : ''}
        />
         <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>}
        </button>
        <p>Subscribe to our news letter to get updates on your email inbox.</p>     

         </form>

      {!isEmailValid && <p className="error-message">Please enter a valid email address.</p>}
    </div>
        
       
        
      </div>
    </section>
  );
};

export default ContactUs;


{/* <div >
<h5>Subscribe Here</h5>


<input input type="text" placeholder="Email Address " name="email" id="email" value={formData.email} onChange={handleEmailChange} required></input>
    <button onSubmit={handleSubmit}><FontAwesomeIcon icon={faPaperPlane} /></button>
    <p>Subscribe to our news letter to get updates on your email inbox.</p>
</div> */}



 {/* <h5>Subscribe to our news letter</h5>
            <label class="custom-field one" >
              <input type="text" placeholder=" " id="name" value={formData.name} onChange={handleChange} required />
              <span class="placeholder"><FontAwesomeIcon icon={faUser} />Name</span>
            </label>
            <label class="custom-field one" >
              <input type="text" placeholder=" " id="email" value={formData.email} onChange={handleEmailChange} required />
              <span class="placeholder"><FontAwesomeIcon icon={faEnvelope} />Email</span>
            </label> */}




            {/* <label htmlFor="name">  Name:</label>
            <input type="text" id="name" name="name" /> */}
          {/* <div>
            <label htmlFor="email"> <FontAwesomeIcon icon={faEnvelope} /> Email Id:</label>
            <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div> */}
          {/* <div>
            <button
            >Submit</button>
            </div> */}