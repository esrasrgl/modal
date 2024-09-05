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
    <path
      d="M9 22.5312H15C20 22.5312 22 20.5312 22 15.5312V9.53125C22 4.53125 20 2.53125 15 2.53125H9C4 2.53125 2 4.53125 2 9.53125V15.5312C2 20.5312 4 22.5312 9 22.5312Z"
      fill="#054EDD"
    />
    <path
      d="M7.75 12.5312L10.58 15.3612L16.25 9.70125"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
