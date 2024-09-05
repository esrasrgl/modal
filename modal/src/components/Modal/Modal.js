import React from "react";
import "./Modal.css";
import { Header } from "../Header/Header";
import { Buttons } from "../Footer/Buttons";
export default function Modal({ onClose }) {
  return (
    <div data-testid="modal" className="modal" onClick={onClose}>
      <div className="overlay"></div>
      <div
        data-testid="modal-content"
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <Header/>
      </div>
    </div>
  );
}
