import React, { useState, useEffect } from 'react';

import '../styles/UserReviews.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import man1 from '../assets/avatar/man1.png';
import man2 from '../assets/avatar/man2.png';
import women1 from '../assets/avatar/women1.png';
import women2 from '../assets/avatar/women2.png';
import women3 from '../assets/avatar/women3.png';
import women4 from '../assets/avatar/women4.png';
import women5 from '../assets/avatar/women5.png';

const testimonials = [
    {
        id: 1, 
        text: "We find the Doctors so courteous and helpful. My recent experience with the clinic to treat my niece who had dengue symptoms and she seems to be recovering well. Thanks!!!",
        author: {
          name: "Narasimman Viswanathan",
          profile_photo_url: man1, 
        },
        rating: 5,
      },
      {
        id: 2,
        text: "Knowledgeable doctor and I visited Dr Premi for entire my family and all have been diagnosed well and cured well immediately. Nursing and reception people  also very good..",
      
        author: {
          name: "Subathra A",
          profile_photo_url: women4,
        },
        rating: 5,
      },
      {
        id: 3,
        text: "The care was outstanding all the way from start to finish. The Doctor put forth a high level of effort to deliver results. The facility was well equipped and designed for patient privacy, service and efficiency.",
        author: {
          name: "shaji cute",
          profile_photo_url:women1, 
        },
        rating: 5,
      },{
        id: 4,
        text: "Good hospital to visit , they gave me a proper treatment which is very affordable and great , please keep up the good work !",
        author: {
          name: "Riya Princy",
          profile_photo_url: women2,
        },
        rating: 5,
      },{
        id: 5,
        text: "I went to this clinic with cold and cough, I went to my nearby clinic they didn't give me a proper treatment, I came to know this hospital they gave me a proper treatment and they advised me to keep nebulization which is only 100rs including medicine, I got a very quick recovery. Thank you so much.",
        author: {
          name: "Ammu Velu",
          profile_photo_url: women3, 
        },
        rating: 4,
      },{
        id: 6,
        text: "Through oral referral I came to this hospital which is quite big, it consists of 4 bed and minimal hospital set up. This setup is very good. Here doctor are nice and treating very good",
        
        author: {
          name: "Rajan",
          profile_photo_url: man2,
        },
        rating: 5,
      },{
        id: 7,
        text: "Nice Ambience, doctors are well knowledged, I suffered from very high viral fever later on they suspect dengue for me. They gave me a proper treatment which is very affordable amd great.No unnecessary charges were made. Thank you so much.",
        author: {
          name: "AshaBegam",
          profile_photo_url: women5,
        },
        rating: 5,
      },];
const Testimonial = ({ text, author, rating }) => {
  return (
    <div className="testimonial">
      <div className="reviewer">
        <img src={author.profile_photo_url} alt={author.name} />
        <span>{author.name}</span>
      </div>
      <p className="review-text">{text}</p>
      <div className="rating">
        {[...Array(rating)].map((_, icon) => (
                <FontAwesomeIcon key={icon} icon={faStar}></FontAwesomeIcon>
                ))}
      </div>
    </div>
  );
};

const UserReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Adjust interval for automatic transition (in milliseconds)

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  const handleNextReview = () => {
    setCurrentReview((currentReview + 1) % testimonials.length);
  };

  const handlePrevReview = () => {
    setCurrentReview((currentReview - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className='userReview'>
      <h2>Our Patients story</h2>
      <h3>Don’t take our word for it — hear what our customers are saying</h3>
    <div className="testimonials-container">
      <div className="testimonials-wrapper">
        <button onClick={handlePrevReview} disabled={currentReview === 0}>
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </button>
        <div class="content">
        <FontAwesomeIcon icon ={faQuoteLeft}></FontAwesomeIcon> 
         <Testimonial {...testimonials[currentReview]} />
        <FontAwesomeIcon icon ={faQuoteRight}></FontAwesomeIcon>  </div>

        <button onClick={handleNextReview}>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </button>
      </div>
    </div></div>
  );
};

export default UserReviews;
