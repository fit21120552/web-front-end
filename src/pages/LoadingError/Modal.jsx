import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalHeader } from 'react-bootstrap';
function VerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className=' modal-backdrop show in'
      data-bs-theme="transparent"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.body}
      </Modal.Body>
      <Modal.Footer>
        <button variant="danger" className="bg-danger p-2 rounded-lg" onClick={props.onDelete}>
            Delete
          </button>
          <button variant="primary" className="bg-primary p-2 rounded-lg" onClick={props.onCancel}>
            Cancel
          </button>
      </Modal.Footer>
    </Modal>
  );
}

export default VerticallyCenteredModal;
