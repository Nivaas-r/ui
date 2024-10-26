import React from 'react';
import '../styles/OurDoctors.css'; 
import femaleDoc from '../assets/1.png'
import MaleDoc from '../assets/2.png'

const OurDoctors = () => {
  const doctors = [
    {
      name: 'Dr. Mohamed Hasik',
      gender: 'male',
      imageUrl: MaleDoc, 
      specialty: 'General Physician',
      education: 'MBBS',
      description: (
        <p >
          Dr. Hasik is a highly skilled and experienced general physician
          with a passion for patient care. He has a strong background in
          diagnosing and treating a wide range of medical conditions. He
          is dedicated to providing his patients with compassionate and
          comprehensive healthcare.
        </p>
      ),
    },
    {
      name: 'Dr. Jerin premi',
      gender: 'female',
      imageUrl: femaleDoc, 
      specialty: 'General Physician',
      education: 'MBBS',
      description: (
        <p>
          Dr. Premi is a dedicated and knowledgeable general physician
          committed to providing excellent care to her patients. With expertise
          in various medical areas, she ensures thorough diagnosis and treatment
          plans. She is also known for her empathetic approach and patient-centered
          care.
        </p>
      ),
    },
  ];

  return (
    <section className="about">
      <h2>Meet Our Skilled General Physicians</h2>
      <p className='description'>
        Our team of general physicians is dedicated to providing comprehensive
        healthcare services to patients of all ages. With their extensive
        knowledge and experience, they ensure accurate diagnoses, personalized
        treatment plans, and compassionate care.
      </p>
      <div className="doctors">
        {doctors.map((doctor) => (
          <div className="doctor" key={doctor.name}>
            <img src={doctor.imageUrl} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <h5>{doctor.specialty}</h5>
            <p>{doctor.education}</p>
            {doctor.description}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurDoctors;
                                  