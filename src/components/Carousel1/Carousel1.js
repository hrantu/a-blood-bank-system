import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import campaign2 from '../../images/campaign2.jpg';


const Carousel1 = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={campaign2}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={campaign2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={campaign2}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Carousel1;