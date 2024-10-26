import React from 'react';
import '../styles/Services.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faWaveSquare, faHome, faUserDoctor, faTruckMedical, faBed, faCapsules, faDroplet, faXRay } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    name: 'ECG',
    icon: faHeart, 
    description: 'Electrocardiogram to assess heart health.',
  },
  {
    name: 'Echo',
    icon: faWaveSquare,
    description: 'Echocardiogram for detailed heart imaging.',
  },
  {
    name: 'X-Ray',
    icon: faXRay,
    description: 'X-ray imaging for diagnosing bone and tissue problems.',
  },
  {
    name: 'Blood Test (Sugar Test)',
    icon: faDroplet,
    description: 'Blood tests, including sugar level checks.',
  },
  {
    name: 'Home Visit',
    icon: faHome, 
    description: 'Convenient medical care at your residence.',
  },
  {
    name: 'General Check-Up',
    icon: faUserDoctor, 
    description: 'Comprehensive physical examination for overall health.',
  },
  {
    name: 'Emergency Care',
    icon: faTruckMedical,
    description: '24/7 emergency care for urgent medical conditions.',
  },
  {
    name: 'Pharmacy',
    icon: faCapsules, 
    description: 'On-site pharmacy for convenient access to medications.',
  },
  {
    name: 'Ward Area',
    icon: faBed,
    description: 'Comfortable and well-equipped ward for inpatient care.',
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Comprehensive Services</h2>
      <p>
        We are dedicated to providing a wide range of medical services to meet
        your healthcare needs. Our team of skilled professionals and advanced
        technology ensure you receive the best possible care.
      </p>
      <div className="services-container">
        {services.map((service) => (
          <div className="service" key={service.name}>
            <FontAwesomeIcon icon={service.icon}/>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
