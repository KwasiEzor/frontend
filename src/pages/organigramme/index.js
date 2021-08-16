import {
  Container,
  Tabs,
  Tab,
  Row,
  Col,
  Card,
  Button,
  Modal,
} from "react-bootstrap";
import BigTitle from "../../components/utils/BigTitle";
import { membersData } from "../../data/membersData";
import { useState } from "react";

const Index = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // currentExecutiveMember();
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
                {membersData &&
                  membersData[0].executive.map((member) => (
                    <Col lg md="4" sm="12">
                      <Card
                        style={{
                          width: "calc(100% - 2rem)",
                          marginBottom: "2rem",
                        }}
                        className="organ__card__item"
                        key={member.id}
                      >
                        <Card.Img variant="top" src={member.imgUrl} />
                        <Card.Body>
                          <Card.Title>{member.title}</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary" onClick={handleShow}>
                            Voir profil
                          </Button>
                          {/* Modal section for profile  */}
                          {/* <ModalComponent member={member} /> */}
                          <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              I will not close if you click outside me. Don't
                              even try to press escape key.
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                              <Button variant="primary">Understood</Button>
                            </Modal.Footer>
                          </Modal>
                          {/*End Modal section for profile  */}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
              {/* Row  */}
            </Container>
          </Tab>
          <Tab eventKey="Directeur" title="Comité directeur">
            <Container>
              <Row className="p-4">
                {membersData &&
                  membersData[0].committee.map((member) => (
                    <Col lg md="4" sm="12">
                      <Card
                        style={{
                          width: "calc(100% - 2rem)",
                          marginBottom: "2rem",
                        }}
                        className="organ__card__item"
                        key={member.id}
                      >
                        <Card.Img variant="top" src={member.imgUrl} />
                        <Card.Body>
                          <Card.Title>{member.title}</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Voir profil</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
              {/* Row  */}
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </Container>
  );
};

export default Index;
