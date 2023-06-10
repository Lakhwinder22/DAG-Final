import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img2 from '../../images/Img2.png';
import Img6 from '../../images/Img3.jpg';
import Img5 from '../../images/Slider2.jpg';
import Img3 from '../../images/Img6.jpg';
import Img7 from '../../images/Slider1.jpg';

function AppSlide() {
  return (
  <div className='Slid'>
      
        <div className='AppSlideItem'>
        <Carousel slide={false}>
        <Carousel.Item >
        <img
          className="d-block w-100"
          src={Img2}  height={550}
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src={Img3} height={550}
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src={Img6} height={550}
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src={Img7} height={550}
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src={Img5} height={550}
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
        </div>
      
  </div>
  );
}

export default AppSlide;

