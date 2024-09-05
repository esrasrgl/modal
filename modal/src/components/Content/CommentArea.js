import Pen from "../../Svg/PenSvg";

export const CommentArea = ({ message, handleChange }) => {
  return (
    <div className="text-container">
      <Pen />
      <textarea
        placeholder="yorumlarını bu alana girebilirsin..."
        value={message}
        onChange={handleChange}
      />
    </div>
  );
};
