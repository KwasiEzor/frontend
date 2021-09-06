import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
const Hero = () => {
  return (
    <Container className="hero__block container">
      <Row>
        <Col lg md={6} xs={12} className="hero__left">
          <div className="hero__left__box">
            <h1 className="hero__left_title">
              Bienvenue <br />
              au
            </h1>
            <h1 className="hero_left_ndTitle">Braine</h1>

            <div>
              <img
                src="/assets/images/trust.png"
                alt="Braine Trust"
                className="hero__left__img"
              />
            </div>
            <Link href="/scrabble">
              <Button
                type="button"
                variant="outline-warning"
                className="mt-4 btnHeroAction"
                size="lg"
              >
                COMMENCEZ ICI
              </Button>
            </Link>
          </div>
        </Col>
        <Col lg md={6} xs={12} className="hero__right"></Col>
      </Row>
    </Container>
  );
};

export default Hero;
