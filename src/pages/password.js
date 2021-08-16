import { Container, Form, Button } from "react-bootstrap";

import BigTitle from "../components/utils/BigTitle";

const password = () => {
  return (
    <Container
      style={{ width: "100%", minHeight: "100vh", padding: " 3rem 0" }}
    >
      <BigTitle
        imgUrl="/assets/images/letterN.png"
        title="ouveau mot de passe"
      />
      <Container
        style={{ display: "grid", placeItems: "center", margin: " 3rem 0" }}
        className="contact__formBox"
      >
        <Form style={{ maxWidth: "30rem", width: "100%" }}>
          <Form.Group className="mb-3" controlId="passwordGroup">
            <Form.Label className="text-white">Votre mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Saisir mot de passe"
              name="password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="passwordConfirmGroup">
            <Form.Label className="text-white">
              Confirmer votre mot de passe
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Saisir mot de passe"
              name="confirmPassword"
            />
          </Form.Group>

          <Form.Group className="text-center">
            <Button
              type="button"
              variant="warning"
              size="lg"
              className="d-block"
            >
              Envoyer
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </Container>
  );
};

export default password;
