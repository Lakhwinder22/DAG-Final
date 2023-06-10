import React from 'react';
import '../../App.css';
import Carousel from 'react-bootstrap/Carousel';
import Gallery5 from '../../images/Gallery5.JPG';
import Gallery4 from '../../images/Gallery4.JPG';
import Gallery3 from '../../images/Gallery3.JPG';
import Gallery2 from '../../images/Gallery2.JPG';

function AboutSlider() {
  return (
    <div className="about-slider-container">
      <div>
        <br></br>
        <br></br>
        <div className='EventSlid'>
          <h1 className='EventHead'><strong>Events</strong></h1>
          <br></br>
          <br></br>
          <div className='AboutSlideItem'>
          <Carousel slide={false}>
            <Carousel.Item > 
              <img
                className="d-block"
                src={Gallery5}
                height={500}
                alt=""
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  >
              <img
                className="d-block"
                src={Gallery4}
                height={500}
                alt=""
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block"
                src={Gallery3}
                height={500}
                alt=""
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={Gallery2}
                height={500}
                alt=""
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
        
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default AboutSlider;
