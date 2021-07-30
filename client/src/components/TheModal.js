import React from "react";
import { Modal } from "react-bootstrap";

const TheModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <img
            src={props.imageurl}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TheModal;
