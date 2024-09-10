import "./Buttons.css"
export const Buttons = ({ onClose, submit }) => {
  return (
    <div className="buttons">
      <button className="button close-btn" onClick={onClose}>
        Kapat
      </button>
      <button type="submit" className="button submit-btn" onClick={submit}>
        Gönder
      </button>
    </div>
  );
};
