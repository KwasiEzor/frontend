import { Container, Col } from "react-bootstrap";
const Partners = () => {
  return (
    <Container
      style={{
        borderColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "1rem",
        margin: "3rem 0",
      }}
    >
      <Col className="">
        <img
          src="/assets/images/fisf.jpg"
          className="logoPartner"
          alt=" logo partenaires"
        />
      </Col>
      <Col className="">
        <img
          src="/assets/images/ffsc.png"
          className="logoPartner"
          alt=" logo partenaires"
        />
      </Col>
      <Col className="">
        <img
          src="/assets/images/ouistreham.png"
          className="logoPartner"
          alt=" logo partenaires"
        />
      </Col>
      <Col className="">
        <img
          src="/assets/images/fbs.png"
          className="logoPartner"
          alt=" logo partenaires"
        />
      </Col>
    </Container>
  );
};

export default Partners;
