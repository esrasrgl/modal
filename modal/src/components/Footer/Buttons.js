import "./Buttons.css"
export const Buttons = ({ onClose, submit }) => {
  return (
    <div className="buttons">
      <button className="close-btn" onClick={onClose}>
        Kapat
      </button>
      <button type="submit" className="submit-btn" onClick={submit}>
        Gönder
      </button>
    </div>
  );
};
