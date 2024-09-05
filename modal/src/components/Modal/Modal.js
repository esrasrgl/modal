import React from "react";
import "./Modal.css";
import { Header } from "../Header/Header";
import { Buttons } from "../Footer/Buttons";
import { Content } from "../Content/Content";
import { useState } from "react";
import AdminPanelPage from "../../enums/AdminPanelPage";
import { useEffect } from "react";
import { getReportIssueType } from "../../api/requests";
import { BookSectionCropReport } from "../../api/requests";

export default function Modal({ onClose }) {
  const [message, setMessage] = useState("");
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    getReportIssueType(setResponseData);
  }, []);

  const handleSubmit = () => {
    const selectedItems = responseData
      .filter((item) => item.DescriptionStatus)
      .map((item) => item.Id);

    const sortedItems = [...selectedItems].sort((a, b) => a - b);

    const data = {
      Message: message,
      Issues: sortedItems,
      BookSectionCropId: 1,
      AdminPanelPage: AdminPanelPage.QuestionSubTopicSelection,
    };
    //BookSectionCropReport(data);
    console.log("handleSubmit data", data);
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
        />
        <Buttons onClose={onClose} submit={handleSubmit} />
      </div>
    </div>
  );
}
