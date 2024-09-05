import "./Content.css";
import { CommentArea } from "./CommentArea";
import { useState, useEffect } from "react";
import CheckItem from "./CheckItem";
import { getReportIssueType } from "../../api/requests";

export const Content = () => {
  const [message, setMessage] = useState("");
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    getReportIssueType(setResponseData);
  }, []);

  const handleChange = (event) => setMessage(event.target.value);

  const handleCheck = (id) => {
    setResponseData((prevData) =>
      prevData.map((item) =>
        item.Id === id
          ? { ...item, DescriptionStatus: !item.DescriptionStatus }
          : item
      )
    );
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Bir Problemle mi Karşılaştın? 🤔</h1>
        {responseData.map((item, index) => (
          <CheckItem item={item} setIsChecked={handleCheck} key={index} />
        ))}
      </div>
      <div className="comment">
        <h1>Yorum Yapabilirsin</h1>
        <CommentArea message={message} handleChange={handleChange} />
      </div>
    </div>
  );
};
