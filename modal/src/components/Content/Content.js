import "./Content.css";
import { CommentArea } from "./CommentArea";
import { useState } from "react";
import CheckItem from "./CheckItem";

export const Content = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => setMessage(event.target.value);
  const itemData = [
    {
      Description: "string",
      Id: 1,
      Name: "Müfredata Uygun Değil",
      DescriptionStatus: false,
    },
  ];
  return (
    <div className="container">
      <div className="content">
        <h1>Bir Problemle mi Karşılaştın? 🤔</h1>
        {itemData.map((item, index) => (
          <CheckItem item={item} setIsChecked={() => {}} key={index} />
        ))}
      </div>
      <div className="comment">
        <h1>Yorum Yapabilirsin</h1>
        <CommentArea message={message} handleChange={handleChange} />
      </div>
    </div>
  );
};
