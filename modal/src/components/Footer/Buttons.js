import "./Buttons.css"
import { Texts } from "../../text/tr";
export const Buttons = ({ onClose, submit }) => {
  return (
    <div className="buttons">
      <button className="button close-btn" onClick={onClose}>
        {Texts.close_button}
      </button>
      <button type="submit" className="button submit-btn" onClick={submit}>
        {Texts.submit_button}
      </button>
    </div>
  );
};
