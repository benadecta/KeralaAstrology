import React from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, content }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">{content}</div>
    </div>
  );
};

 export default Modal;
;
