import { Container, Tabs, Tab, Row, Col, Card, Button } from "react-bootstrap";
import BigTitle from "../../components/utils/BigTitle";
const Index = () => {
  return (
    <Container
      className="page__scrabble "
      style={{ minHeight: "100vh", padding: " 3rem 0", width: "100%" }}
    >
      <BigTitle
        imgUrl="/assets/images/letterO.png"
        title="rganigramme"
        marginBottom="3rem"
      />
      <Container className="page__organigram__container glassMorphic mt-4">
        <Tabs defaultActiveKey="Bureau" id="organigram-tabs" className="mb-3">
          <Tab eventKey="Bureau" title="Bureau Exécutif">
            <Container style={{ display: "grid", placeItems: "center" }}>
              <Row className="p-4">
                <Col lg md="4" sm="12">
                  <Card
                    style={{ width: "18rem", marginBottom: "2rem" }}
                    className="organ__card__item"
                  >
                    <Card.Img variant="top" src="/assets/images/profil-5.png" />
                    <Card.Body>
                      <Card.Title>Présidente</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Voir profil</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg md="4" sm="12">
                  <Card
                    style={{ width: "18rem", marginBottom: "2rem" }}
                    className="organ__card__item"
                  >
                    <Card.Img variant="top" src="/assets/images/profil-4.png" />
                    <Card.Body>
                      <Card.Title>Vice Président</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Voir profil</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg md="4" sm="12">
                  <Card
                    style={{ width: "18rem", marginBottom: "2rem" }}
                    className="organ__card__item"
                  >
                    <Card.Img variant="top" src="/assets/images/profil-2.png" />
                    <Card.Body>
                      <Card.Title>Secrétaire</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Voir profil</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* Row  */}
              <Row className="p-4">
                <Col lg md="4" sm="12">
                  <Card
                    style={{ width: "18rem", marginBottom: "2rem" }}
                    className="organ__card__item"
                  >
                    <Card.Img variant="top" src="/assets/images/profil-8.png" />
                    <Card.Body>
                      <Card.Title>Trésorier</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Voir profil</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg md="4" sm="12">
                  <Card
                    style={{ width: "18rem", marginBottom: "2rem" }}
                    className="organ__card__item"
                  >
                    <Card.Img variant="top" src="/assets/images/profil-7.png" />
                    <Card.Body>
                      <Card.Title>Coordinateur interclub</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Voir profil</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg md="4" sm="12">
                  <Card
                    style={{ width: "18rem", marginBottom: "2rem" }}
                    className="organ__card__item"
                  >
                    <Card.Img variant="top" src="/assets/images/profil-6.png" />
                    <Card.Body>
                      <Card.Title>Coordinateur tournoi</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Voir profil</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="Directeur" title="Comité directeur">
            <Container>
              <Row>
                <Col lg md="4" sm="12">
                  <Card
                    style={{ width: "18rem", marginBottom: "2rem" }}
                    className="organ__card__item"
                  >
                    <Card.Img variant="top" src="/assets/images/user-3.jpg" />
                    <Card.Body>
                      <Card.Title>Présidente</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Voir profil</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </Container>
  );
};

export default Index;
