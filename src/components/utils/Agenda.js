import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import { useContext } from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/AccordionContext";
import AgendaRow from "./AgendaRow";
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
      <i className="fas fa-plus-square"></i>
    </button>
  );
}
const Agenda = ({ agendas }) => {
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
      {agendas.map((agenda, index) => (
        <AgendaRow agenda={agenda} key={index} />
      ))}
    </Container>
  );
};

export default Agenda;
