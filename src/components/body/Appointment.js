import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; 
import "../styles/Appointment.css"
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserClock, faUser, faPhone, faNotesMedical, faCalendarTimes, faClose } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';


const Appointment = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    illness: '',
    phoneNumber: '',
    date: new Date(), 
    time: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleTimeChange = (event) => {
    setFormData({ ...formData, time: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted appointment:', formData);
    setShowForm(false);
  };
  const myButton = document.getElementById("appointmentButton");

  return (
    <div className="appointment-booking">
      <h2>Book Your Appointment</h2>
      <div>
     <button id="appointmentButton" onClick={() => setShowForm(!showForm)}>
          {showForm ? myButton.hidden = true : 'Book Now'}
        </button>
      
        {showForm && (
          <form onSubmit={handleSubmit}>
            <button id='close'onClick={()=>setShowForm(!showForm)||(myButton.hidden=false)}><FontAwesomeIcon icon={faClose} />
            </button>
            <label htmlFor="name" > <FontAwesomeIcon icon={faUser} /> Name:</label>

            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="illness"><FontAwesomeIcon icon={faNotesMedical} /> Illness:</label>
            <input type="text" id="illness" name="illness" value={formData.illness} onChange={handleChange} required />

            <label htmlFor="phoneNumber"><FontAwesomeIcon icon={faPhone} /> Phone Number:</label>
            <input
              type="tel" 
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              pattern="[0-9]{10}" 
              maxLength="10" 
              required
            />

            <label htmlFor="date"><FontAwesomeIcon icon={faCalendarTimes} /> Date:</label>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd" 
              minDate={new Date()}
              required
            />

            <label htmlFor="time"><FontAwesomeIcon icon={faUserClock} /> Time:</label>
            <input type="time" id="time" name="time" value={formData.time} onChange={handleTimeChange} required />

            <button type="submit">Submit</button>
          </form>
            

        )}
       
      </div>
    </div>
  );
};

export default Appointment;
