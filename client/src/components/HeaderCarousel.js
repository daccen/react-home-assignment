import React from "react";

import Carousel from "react-bootstrap/Carousel";

const HeaderCarousel = () => {
  return (
    <div>
      <Carousel fade variant="dark">
        <Carousel.Item style={{ maxHeight: "100px" }}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ maxHeight: "100px" }}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ maxHeight: "100px" }}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeaderCarousel;
