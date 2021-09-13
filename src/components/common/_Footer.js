import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
const _Footer = () => {
  const currentYear = new Date().getFullYear;
  return (
    <>
      <Container className="container-fluid text-center">
        <div className="container footer">
          <Row className="row">
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>Conditions générales</p>
            </div>
            <Col
              lg="3"
              md="6"
              sm="12"
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>Règlement Intérieur</p>
            </Col>
            <Col
              lg="3"
              md="6"
              sm="12"
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>Braine-l'Alleud</p>
            </Col>
            <Col
              lg="3"
              md="6"
              sm="12"
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={"/assets/images/logo-braine-nav.svg"}
                alt={"logo-braine-nav.svg"}
                width={100}
                height={50}
              />
            </Col>
          </Row>
        </div>
        <p style={{ margin: "0 auto", color: "white", fontSize: "0.7rem" }}>
          &copy; {currentYear} Tous droits réservés
        </p>
      </Container>
    </>
  );
};

export default _Footer;
