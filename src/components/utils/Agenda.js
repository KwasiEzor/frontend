import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import { useContext } from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/AccordionContext";
function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{
        backgroundColor: isCurrentEventKey ? "" : "",
        position: "absolute",
        right: "10px",
      }}
      onClick={decoratedOnClick}
      className="btn btn-warning"
    >
      <i class="fas fa-plus-square"></i>
    </button>
  );
}
const Agenda = () => {
  return (
    <Container
      style={{
        marginTop: "3rem",
        marginBottom: "3rem",
        maxHeight: "50vh",
        overflowY: "auto",
      }}
    >
      {/* item  */}
      {/* end item  */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Row
              className="accordionHeader__content"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                gap: "1rem",
                width: "100%",
                position: "relative",
              }}
            >
              <Col sm={12} md={2}>
                <h6>Evénements</h6>
                <p className="text-primary">Amicale</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Date </h6>
                <p>11.08.2021</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Séries</h6>
                <p>Toutes les Séries</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Compétitions</h6>
                <p>Aucune</p>
              </Col>
              {/* <h6>Accordion Title</h6>
              <h6>Accordion Title</h6>
              <h6>Accordion Title</h6> */}
            </Row>
            <ContextAwareToggle />
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        {/* end item  */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <Row
              className="accordionHeader__content"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                gap: "1rem",
                width: "100%",
                position: "relative",
              }}
            >
              <Col sm={12} md={2}>
                <h6>Evénements</h6>
                <p className="text-primary">Amicale</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Date </h6>
                <p>11.08.2021</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Séries</h6>
                <p>Toutes les Séries</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Compétitions</h6>
                <p>Aucune</p>
              </Col>
              {/* <h6>Accordion Title</h6>
              <h6>Accordion Title</h6>
              <h6>Accordion Title</h6> */}
            </Row>
            <ContextAwareToggle />
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        {/* end item  */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <Row
              className="accordionHeader__content"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                gap: "1rem",
                width: "100%",
                position: "relative",
              }}
            >
              <Col sm={12} md={2}>
                <h6>Evénements</h6>
                <p className="text-primary">Amicale</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Date </h6>
                <p>11.08.2021</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Séries</h6>
                <p>Toutes les Séries</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Compétitions</h6>
                <p>Aucune</p>
              </Col>
              {/* <h6>Accordion Title</h6>
              <h6>Accordion Title</h6>
              <h6>Accordion Title</h6> */}
            </Row>
            <ContextAwareToggle />
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        {/* end item  */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <Row
              className="accordionHeader__content"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                gap: "1rem",
                width: "100%",
                position: "relative",
              }}
            >
              <Col sm={12} md={2}>
                <h6>Evénements</h6>
                <p className="text-primary">Amicale</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Date </h6>
                <p>11.08.2021</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Séries</h6>
                <p>Toutes les Séries</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Compétitions</h6>
                <p>Aucune</p>
              </Col>
              {/* <h6>Accordion Title</h6>
              <h6>Accordion Title</h6>
              <h6>Accordion Title</h6> */}
            </Row>
            <ContextAwareToggle />
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        {/* end item  */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <Row
              className="accordionHeader__content"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                gap: "1rem",
                width: "100%",
                position: "relative",
              }}
            >
              <Col sm={12} md={2}>
                <h6>Evénements</h6>
                <p className="text-primary">Amicale</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Date </h6>
                <p>11.08.2021</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Séries</h6>
                <p>Toutes les Séries</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Compétitions</h6>
                <p>Aucune</p>
              </Col>
              {/* <h6>Accordion Title</h6>
              <h6>Accordion Title</h6>
              <h6>Accordion Title</h6> */}
            </Row>
            <ContextAwareToggle />
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        {/* end item  */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <Row
              className="accordionHeader__content"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                gap: "1rem",
                width: "100%",
                position: "relative",
              }}
            >
              <Col sm={12} md={2}>
                <h6>Evénements</h6>
                <p className="text-primary">Amicale</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Date </h6>
                <p>11.08.2021</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Séries</h6>
                <p>Toutes les Séries</p>
              </Col>
              <Col sm={12} md={2}>
                <h6>Compétitions</h6>
                <p>Aucune</p>
              </Col>
              {/* <h6>Accordion Title</h6>
              <h6>Accordion Title</h6>
              <h6>Accordion Title</h6> */}
            </Row>
            <ContextAwareToggle />
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        {/* end item  */}
      </Accordion>
    </Container>
  );
};

export default Agenda;
