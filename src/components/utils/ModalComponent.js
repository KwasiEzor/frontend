import { Modal, Button } from "react-bootstrap";
import { Component } from "react";
class ModalComponent extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={() => this.props.onHide({ msg: "Cross icon clicked !" })}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.data.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.data.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => this.props.onClick({ msg: "Modal closed !" })}
            >
              Understood
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ModalComponent;
