import React from 'react';
import InfoIconSvg from "../../Svg/InfoIconSvg";

const Tooltip = ({ text }) => (
  <div className="tooltip-container">
    <InfoIconSvg className= "infoIcon"/>
    <div className="tooltip-text">{text}</div>
  </div>
);

export default Tooltip;
