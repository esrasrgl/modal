import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <>
          <ToastContainer />
          <Modal onClose={handleClose} />
        </>
      )}
    </div>
  );
}

export default App;
