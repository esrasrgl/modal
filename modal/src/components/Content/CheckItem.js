import { SquareCheckSvg, SquareSvg } from "../../Svg";
import Tooltip from "../ToolTip/ToolTip";
import "../ToolTip/ToolTip.css";

export default function CheckItem({ item, setIsChecked }) {
  return (
    <div data-testid="check-item" className="item-container">
      <label style={style} onClick={() => setIsChecked(item.Id)}>
        {item.DescriptionStatus ? <SquareCheckSvg /> : <SquareSvg />}
      </label>
      <span className="span" onClick={() => setIsChecked(item.Id)}>
        {item.Name}
      </span>
      <Tooltip text={item.Description} />
    </div>
  );
}

const style = {
  cursor: "pointer",
};