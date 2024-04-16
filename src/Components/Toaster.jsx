import React from "react";
import { ToastContainer } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

const Toaster = ({ setToast, toast }) => {
  return (
    <Row>
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast
          bg={toast?.type ?? "light"}
          onClose={() => setToast({ ...toast, show: false })}
          show={toast?.show}
          delay={3000}
          autohide
        >
          <Toast.Header></Toast.Header>
          <Toast.Body>{toast?.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Row>
  );
};

export default Toaster;
