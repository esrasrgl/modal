import { PenSvg } from "../../Svg";

export const CommentArea = ({ message, handleChange }) => {
  return (
    <div className="text-container">
      <PenSvg />
      <textarea
        placeholder="yorumlarını bu alana girebilirsin..."
        value={message}
        onChange={handleChange}
      />
    </div>
  );
};
