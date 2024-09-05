import "./Content.css";
import { CommentArea } from "./CommentArea";
import { useState } from "react";
export const Content = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => setMessage(event.target.value);

  return (
    <div className="container">
      <div className="content">
        <h1>Bir Problemle mi Karşılaştın? 🤔</h1>
      </div>
      <div className="comment">
        <h1>Yorum Yapabilirsin</h1>
        <CommentArea message={message} handleChange={handleChange} />
      </div>
    </div>
  );
};
