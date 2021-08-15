import { Container, Row, Col, Form, Button, Tab, Nav } from "react-bootstrap";
import BigTitle from "../components/utils/BigTitle";
import countries from "../data/fr/countries.json";
import { Link } from "next/link";
import { Head } from "next/head";
const inscription = () => {
  return (
    <>
      <Container
        style={{ width: "100%", minHeight: "100vh", padding: " 3rem 0" }}
      >
        <BigTitle imgUrl="/assets/images/letteri.png" title="nscription" />
        <Container style={{ margin: " 3rem 0" }} className="contact__formBox">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav
                  variant="pills"
                  bg="warning"
                  className="flex-column"
                  id="subscribeNav"
                >
                  <Nav.Item>
                    <Nav.Link
                      eventKey="first"
                      className="text-white btn btn-ouline"
                    >
                      Ancien Membre
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="second"
                      className="text-white btn btn-ouline"
                      bg="warning"
                    >
                      Nouveau Membre
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {/* Ancien Membre  */}
                  <Tab.Pane eventKey="first" className="subscribeTabPanel">
                    <Form
                      style={{
                        maxWidth: "30rem",
                        width: "100%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <Form.Group className="mb-3" controlId="emailGroup">
                        <Form.Label className="text-white">
                          Votre adresse Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="nom@exemple.com"
                          name="email"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="passwordGroup">
                        <Form.Label className="text-white">
                          Votre mot de passe
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Saisir mot de passe"
                          name="password"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="passwordConfirmGroup"
                      >
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
                          name="btnSubscribe"
                        >
                          Envoyer
                        </Button>
                      </Form.Group>
                    </Form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second" className="subscribeTabPanel">
                    {/* Nouveau Membre  */}
                    <Form
                      style={{
                        maxWidth: "30rem",
                        width: "100%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <Form.Group className="mb-3" controlId="firstnameGroup">
                        <Form.Label className="text-white">
                          Votre nom
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="nom@exemple.com"
                          name="firstname"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="lastnameGroup">
                        <Form.Label className="text-white">
                          Votre prénom
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Entrez votre prénom"
                          name="lastname"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="birthdayGroup">
                        <Form.Label className="text-white">
                          Votre date de naissance
                        </Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Choisir une date"
                          name="birthday"
                          className="inputSelect"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="nationalityGroup">
                        <Form.Label className="text-white">
                          Votre nationalité
                        </Form.Label>
                        <Form.Select defaultValue="Choisir pays">
                          <option>Votre pays...</option>
                          {countries.map((country) => (
                            <option key={country.id} value={country.name}>
                              {country.name}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="text-white">
                          Votre adresse
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Entrez votre adresse"
                          name="address"
                        />
                      </Form.Group>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label className="text-white">Ville</Form.Label>
                          <Form.Control
                            type="text"
                            name="city"
                            placeholder="Votre ville"
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPostalCode">
                          <Form.Label className="text-white">
                            Code postal
                          </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Votre code postal"
                            name="postalCode"
                          />
                        </Form.Group>
                      </Row>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="text-white">
                          Numéro de téléphone
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Entrez votre numéro de téléphone"
                          name="phoneNumber"
                        />
                      </Form.Group>
                      <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label className="textShadow text-white">
                          Choisir une image
                        </Form.Label>
                        <Form.Control
                          type="file"
                          name="profileImage"
                          className="inputFile"
                        />
                      </Form.Group>
                      <Form.Group className="text-center">
                        <Button
                          type="button"
                          variant="warning"
                          size="lg"
                          className="d-block"
                          name="btnSubscribe"
                        >
                          Envoyer
                        </Button>
                      </Form.Group>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </Container>
    </>
  );
};

export default inscription;
