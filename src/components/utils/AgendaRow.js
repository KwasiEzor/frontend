import { Container, Row, Col, Accordion, Badge } from "react-bootstrap";
import { useContext } from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/AccordionContext";
import { Button } from "react-bootstrap";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Button
      type="button"
      style={{
        backgroundColor: isCurrentEventKey ? "" : "",
        position: "absolute",
        right: "10px",
      }}
      onClick={decoratedOnClick}
      className="btn btn-warning"
    >
      <i className="fas fa-plus-square"></i>
    </Button>
  );
}
const AgendaRow = ({ agenda, index }) => {
  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey={agenda.id} key={agenda.id}>
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
              <h6>
                <i className="fas fa-cogs text-primary"></i> Evénements
              </h6>
              <p className="text-primary fw-bold">{agenda.event}</p>
            </Col>
            <Col sm={12} md={2}>
              <h6>
                <i className="fas fa-calendar-alt text-primary"></i> Date et
                Heure{" "}
              </h6>
              <p>
                <Badge bg="primary">{agenda.event_date} </Badge> |{" "}
                <Badge bg="warning">{agenda.event_time.substring(0, 5)}</Badge>
              </p>
            </Col>
            <Col sm={12} md={2}>
              <h6>
                <i className="fas fa-universal-access text-primary"></i> Séries
              </h6>
              <p>{agenda.series}</p>
            </Col>
            <Col sm={12} md={2}>
              <h6>
                <i className="fas fa-trophy text-primary"></i> Compétitions
              </h6>
              <p>
                {agenda.competitions.map((competition) => competition.name)}
              </p>
            </Col>
          </Row>
          <ContextAwareToggle />
        </Accordion.Header>
        <Accordion.Body>
          <h6> Lieu: {agenda.event_place}</h6>
          <p>Détails info: {agenda.description}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AgendaRow;
