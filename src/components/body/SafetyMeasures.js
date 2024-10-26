import React from 'react';
import '../styles/SafetyMeasures.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPumpSoap, faPeopleArrows, faHeadSideMask, faTemperatureFull, faVirusCovid, faChair } from '@fortawesome/free-solid-svg-icons'; // Replace with icons you need
const safetyMeasures = [
    {
        icon: faHeadSideMask, 
        title: 'Face Masks Required',
        description: 'Mandating all patients and staff to wear face masks for everyone\'s protection.',
      },
      {
        icon: faTemperatureFull, 
        description: 'Screening of all visitors and patients upon arrival for COVID-19 symptoms.',
        title: 'Entrance Screening',
      },
    {
      icon: faPumpSoap, 
      title: 'Extra Sanitation Methods',
      description: 'Disinfecting all areas and frequently touched surfaces continuously.',
    },
    {
        icon: faVirusCovid,
        title: 'Regular Staff Testing',
        description: 'Committed to staff safety through regular COVID-19 testing.',
      },
    {
      icon: faPeopleArrows, 
      title: 'Social Distancing',
      description: 'Following protocols like limited visitations and spaced waiting areas for your safety.',
    },
    
    {
      icon: faChair,
      title: 'Separate Waiting & Treatment Areas',
      description: 'Strict isolation practices to keep COVID-positive patients separate.',
    },
  ];
 
const SafetyMeasures = () => {


  return (
    <section  className="safety-measures">
      <h2>We Prioritize Your Safety</h2>
      <p>
        During these challenging times, our commitment to patient, loved one, and staff safety remains our top priority. We have implemented a comprehensive range of safety measures to ensure a secure environment for everyone.
      </p>
      <div className="safety-measures-list">
        {safetyMeasures.map((measure) => (
          <div className="safety-measure-item" key={measure.title}>
            <FontAwesomeIcon icon={measure.icon} />
            <h3>{measure.title}</h3>
            <p>{measure.description}</p>
          </div> 
        ))}
      </div>
    </section>
  );
};

export default SafetyMeasures;
