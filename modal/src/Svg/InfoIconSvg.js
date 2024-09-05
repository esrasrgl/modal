import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle opacity={0.1} cx={11.745} cy={12.2762} r={9.75} fill="#054EDD" />
    <path
      d="M12.25 8.53125C12.25 8.80739 12.0261 9.03125 11.75 9.03125C11.4739 9.03125 11.25 8.80739 11.25 8.53125C11.25 8.25511 11.4739 8.03125 11.75 8.03125C12.0261 8.03125 12.25 8.25511 12.25 8.53125Z"
      fill="#054EDD"
      stroke="#054EDD"
    />
    <path
      d="M11.75 17.0312L11.75 12.5312"
      stroke="#054EDD"
      strokeWidth={1.2}
      strokeLinecap="round"
    />
  </svg>
);
export default SVGComponent;
