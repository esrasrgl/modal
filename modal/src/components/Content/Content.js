import "./Content.css";
import { CommentArea } from "./CommentArea";
import CheckItem from "./CheckItem";
import { Texts } from "../../text/tr";

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
        <h1 className="h1">{Texts.title_1}</h1>
        {isLoading ? (
        <p className="loading">{Texts.loading}</p>
      ):(<>
      
      {responseData.map((item, index) => (
        <CheckItem item={item} setIsChecked={handleCheck} key={index} />
      ))}
      </>)}
      </div>
      <div className="comment">
        <h1 className="h1">{Texts.title_2}</h1>
        <CommentArea message={message} handleChange={handleChange} />
      </div>
    </div>
  );
};
