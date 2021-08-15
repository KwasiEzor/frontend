import { Container } from "react-bootstrap";

const SocialLinksArea = () => {
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="socialLinks__content">
        <h3
          className="text-white text-center"
          style={{ textShadow: "0 0 8px rgba(0,0,0,0.25)" }}
        >
          Vous pouvez nous suivre les réseaux sociaux
        </h3>
        <p className="text-center" style={{ cursor: "pointer" }}>
          <img src="/assets/images/facebookLink.png" alt="facebook link" />
        </p>
      </div>
    </Container>
  );
};

export default SocialLinksArea;
