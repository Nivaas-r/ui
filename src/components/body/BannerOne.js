import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "../styles/BannerOne.css"
import {Carousel} from 'react-bootstrap';
import CarouselImageOne from '../assets/corousel/1.png';
import CarouselImageTwo from '../assets/corousel/2.png';
import CarouselImageThree from '../assets/corousel/3.png';
import CarouselImageFour from '../assets/corousel/4.png';
import CarouselImageFive from '../assets/corousel/5.png';


function Home() {
  

  return (
    <div>
    <Carousel className='corosel' fade>
      <Carousel.Item>
        <img src={CarouselImageOne}  text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={CarouselImageTwo}  text="Second slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={CarouselImageThree}   text="Third slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={CarouselImageFour}  text="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={CarouselImageFive}  text="Fifth slide" />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Home;