import { Carousel, Row, Col } from "react-bootstrap";

const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Row className="">
          <Col md={4} className="carouselCol">
            <img src="/assets/images/ods-1.png" alt="ods" />
          </Col>
          <Col md={4} className="carouselCol">
            <img
              src="/assets/images/plateau-scrabble-1.png"
              alt="plateau de scrabble"
            />
          </Col>
          <Col md={4} className="carouselCol">
            <img
              src="/assets/images/plateau-duplicate-1.png"
              alt="plateau duplicate"
            />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="">
          <Col md={4} className="carouselCol">
            <img src="/assets/images/ods-1.png" alt="ods" />
          </Col>
          <Col md={4} className="carouselCol">
            <img
              src="/assets/images/plateau-scrabble-1.png"
              alt="plateau de scrabble"
            />
          </Col>
          <Col md={4} className="carouselCol">
            <img
              src="/assets/images/plateau-duplicate-1.png"
              alt="plateau duplicate"
            />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
