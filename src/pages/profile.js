import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Tab,
  Nav,
  FormControl,
} from "react-bootstrap";
import BigTitle from "../components/utils/BigTitle";
import countries from "../data/fr/countries.json";
const profile = () => {
  return (
    <Container
      className="page__scrabble "
      style={{ minHeight: "100vh", padding: " 3rem 0", width: "100%" }}
    >
      <BigTitle
        imgUrl="/assets/images/letterP.png"
        title="rofil"
        marginBottom="3rem"
      />
      <Container style={{ margin: " 3rem 0" }} className="contact__formBox">
        <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
          <Row>
            <Col sm={3}>
              <Nav
                variant="pills"
                className="flex-column"
                bg="warning"
                id="subscribeNav"
              >
                <Nav.Item>
                  <Nav.Link eventKey="profile" className="text-white">
                    Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="stats" className="text-white">
                    Statistiques
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="profile">
                  <Form
                    style={{
                      maxWidth: "40rem",
                      width: "100%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridFirstanme">
                        <Form.Label className="text-white">Nom</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Votre nom"
                          name="firstname"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridLastanme">
                        <Form.Label className="text-white">Prénom</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Votre prénom"
                          name="lastname"
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="text-white">Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="email"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label className="text-white">
                          Date de naissance
                        </Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="date de naissance"
                          name="birthday"
                        />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress">
                      <Form.Label className="text-white">
                        Votre adresse
                      </Form.Label>
                      <Form.Control placeholder="1234 Main St" name="address" />
                    </Form.Group>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label className="text-white">
                          Votre ville
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Bruxelles"
                          name="city"
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

                      <Form.Group as={Col} controlId="formGridPostalCode">
                        <Form.Label className="text-white">
                          Code postal
                        </Form.Label>
                        <Form.Control type="number" placeholder="1212" />
                      </Form.Group>
                    </Row>

                    <Button variant="warning" type="submit" size="lg">
                      Modifier
                    </Button>
                  </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="stats">
                  <p className="text-white">Stats</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Container>
  );
};

export default profile;
