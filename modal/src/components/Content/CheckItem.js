import SquareCheckSvg from "../../Svg/SquareCheckSvg";
import SquareSvg from "../../Svg/SquareSvg";
import Tooltip from "../ToolTip/ToolTip";
import "../ToolTip/ToolTip.css";

export default function CheckItem({ item, setIsChecked }) {
  return (
    <div data-testid="check-item" className="item-container">
      <label
        style={{ cursor: "pointer" }}
        onClick={() => setIsChecked(item.Id)}
      >
        {item.DescriptionStatus ? <SquareCheckSvg /> : <SquareSvg />}
      </label>
      <span onClick={() => setIsChecked(item.Id)}>{item.Name}</span>
      <Tooltip text={item.Description} />
    </div>
  );
}
