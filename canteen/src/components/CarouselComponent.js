import React from 'react';
import { Carousel } from 'react-bootstrap';
import './styles/CarouselComponent.css';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Chicken Nuggets</h3>
          <p>Spicy Chiken Nuggets with Mayoneese</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Diet Fried Rice</h3>
          <p>Fried Rice with Healthy Bracauli and Vegies.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Grilled Chicken</h3>
          <p>Grilled Chicken Kabab with Red Hot Sauce.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
