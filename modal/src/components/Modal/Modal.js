import React from "react";
import "./Modal.css";
import { Header } from "../Header/Header";
import { Buttons } from "../Footer/Buttons";
import { Content } from "../Content/Content";
import { useState } from "react";
import AdminPanelPage from "../../enums/AdminPanelPage";
import { BookSectionCropReport } from "../../api/requests";
import { toast } from "react-toastify";

export default function Modal({
  onClose,
  responseData,
  isLoading,
  setResponseData,
}) {
  const [message, setMessage] = useState("");

  const selectedItems = () => {
    const selectedItems = responseData
      .filter((item) => item.DescriptionStatus)
      .map((item) => item.Id);

    return [...selectedItems].sort((a, b) => a - b);
  };

  const handleSubmit = () => {
    const sortedItems = selectedItems();

    if (!sortedItems.length) {
      return toast.warning("Lütfen seçim yapınız");
    } else {
      const data = {
        Message: message,
        Issues: sortedItems,
        BookSectionCropId: 1,
        AdminPanelPage: AdminPanelPage.QuestionSubTopicSelection,
      };
      BookSectionCropReport(data);
      console.log("handleSubmit data", data);
    }
  };

  return (
    <div data-testid="modal" className="modal" onClick={onClose}>
      <div className="overlay"></div>
      <div
        data-testid="modal-content"
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <Header onClose={onClose} />
        <Content
          setResponseData={setResponseData}
          setMessage={setMessage}
          responseData={responseData}
          message={message}
          isLoading={isLoading}
        />
        <Buttons onClose={onClose} submit={handleSubmit} />
      </div>
    </div>
  );
}
