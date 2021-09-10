import { Container, Form, Button } from "react-bootstrap";

import BigTitle from "../components/utils/BigTitle";
import { NextSeo } from "next-seo";

const recuperation = () => {
  const SEO = {
    title: "Braine Trust | Récupération MDP",
    description: "La page de mot de passe pour le site Braine Trust",
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Container
        style={{ width: "100%", minHeight: "100vh", padding: " 3rem 0" }}
      >
        <BigTitle
          imgUrl="/assets/images/letterR.png"
          title="écupération mot de passe"
        />
        <Container
          style={{ display: "grid", placeItems: "center", margin: " 3rem 0" }}
          className="contact__formBox"
        >
          <Form style={{ maxWidth: "30rem", width: "100%" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white">
                Votre adresse Email
              </Form.Label>
              <Form.Control type="email" placeholder="nom@exemple.com" />
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
    </>
  );
};

export default recuperation;
