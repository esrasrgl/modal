import "./Content.css";
import { CommentArea } from "./CommentArea";
import CheckItem from "./CheckItem";

export const Content = ({
  message,
  responseData,
  setResponseData,
  setMessage,
  isLoading,
}) => {
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
        {isLoading ? (
        <p className="loading">Loading ...</p>
      ):(<>
      
      {responseData.map((item, index) => (
        <CheckItem item={item} setIsChecked={handleCheck} key={index} />
      ))}
      </>)}
      </div>
      <div className="comment">
        <h1>Yorum Yapabilirsin</h1>
        <CommentArea message={message} handleChange={handleChange} />
      </div>
    </div>
  );
};
