import React from "react";
import { Modal } from "react-bootstrap";

const MainModal = ({
  show,
  closeModal,
  modalTitle,
  modalBody,
  modalFooter,
  size = "lg",
}) => {
  return (
    <Modal show={show} onHide={closeModal} centered size={size}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        {modalFooter}
      </Modal.Footer>
    </Modal>
  );
};

export default MainModal;
