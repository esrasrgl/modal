import React from "react";
import { CloseModalSvg } from "../../Svg";

export const Header = ({ onClose }) => {
  return (
    <div  style={style} onClick={onClose}>
      <CloseModalSvg />
    </div>
  );
};

const style = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  cursor: "pointer",
};