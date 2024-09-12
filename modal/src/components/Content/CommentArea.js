import { PenSvg } from "../../Svg";
import { Texts } from "../../text/tr";

export const CommentArea = ({ message, handleChange }) => {
  return (
    <div className="text-container">
      <PenSvg />
      <textarea
      className="textarea"
        placeholder={Texts.placeHolder_comment}
        value={message}
        onChange={handleChange}
      />
    </div>
  );
};
