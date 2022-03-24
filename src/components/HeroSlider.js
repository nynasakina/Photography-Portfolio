import React from "react";
import { Carousel } from "react-bootstrap";

const HeroSlider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/DQ7fPpR/53a7bf1f-200b-4b60-b4f1-fb1a4bf5a3aa-DSC-5458.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/yW7MGFb/image1.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/LCJY5H8/image3.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/D9hsPPX/bliss-0492.jpg"
            alt="bliss-0492"
          />
        </Carousel.Item>
      </Carousel> */}
    </>
  );
};

export default HeroSlider;
