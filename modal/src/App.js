import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div>
      <button className="modalBtn" onClick={handleShowModal}>
        Open Modal
      </button>
      {showModal && (
        <Modal
        onClose={handleClose}
      />
      )}
    </div>
  );
}

export default App;
