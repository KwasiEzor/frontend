import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
const ModalComponent = ({ member }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop=""
      keyboard={false}
      key={member.id}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {member.title}
          <span>
            {" "}
            <img src={member.countryFlag} alt={member.country} />
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={member.imgUrl}
          className="img-thumbnail"
          alt={member.role}
          style={{ width: "calc(100% - 1rem)" }}
        />
        <div>
          <ul className="list-group list-unstyled">
            <li className="list-item">Nom : {member.lastname}</li>
            <li className="list-item">Prénom : {member.firstname}</li>
            <li className="list-item">Rôle: {member.role}</li>
            <li className="list-item">Scrabble série : {member.playerSerie}</li>
          </ul>
        </div>
        <p className="text-muted">{member.description}</p>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
