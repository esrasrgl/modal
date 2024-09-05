import React from "react";
import "./Modal.css";
export default function Modal({ onClose }) {
  return (
    <div data-testid="modal" className="modal" onClick={onClose}>
      <div className="overlay"></div>
      <div
        data-testid="modal-content"
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
      </div>
    </div>
  );
}
