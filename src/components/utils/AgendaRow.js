import { Container, Row, Col, Accordion, Badge } from "react-bootstrap";
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
const AgendaRow = ({ agenda }) => {
  return (
    <Accordion defaultActiveKey="1" key={agenda.id}>
      <Accordion.Item eventKey={agenda.id}>
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
                <i class="fas fa-calendar-alt text-primary"></i> Date et Heure{" "}
              </h6>
              <p>
                <Badge bg="primary">{agenda.date} </Badge> |{" "}
                <Badge bg="warning">{agenda.time}</Badge>
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
              <p>{agenda.competition}</p>
            </Col>
          </Row>
          <ContextAwareToggle />
        </Accordion.Header>
        <Accordion.Body>{agenda.description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AgendaRow;
