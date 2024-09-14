import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getReportIssueType } from "./api/requests";
import { Texts } from "./text/tr";
import AdminPanelPage from "./enums/AdminPanelPage";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [responseData, setResponseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShowModal = async () => setShowModal(true);

  // Replace with your custom parameters
  let yourBookSectionId = 1;
  let BookSectionCropId = yourBookSectionId;
  let AdminPanelPageSelection = AdminPanelPage.yourSelection; //src/enums

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await getReportIssueType();
      handleShowModal();
      setResponseData(result);
      setIsLoading(false);
    } catch (error) {
      console.error("fetchData error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <button className="modalBtn" onClick={fetchData}>
        {Texts.open_modal}
      </button>
      {showModal && (
        <>
          <Modal
            onClose={handleClose}
            responseData={responseData}
            setResponseData={setResponseData}
            isLoading={isLoading}
            BookSectionCropId={BookSectionCropId}
            AdminPanelPageSelection={AdminPanelPageSelection}
          />
        </>
      )}
    </div>
  );
}

export default App;
