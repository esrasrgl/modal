import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.05 3.53125L4.20835 10.7729C3.95002 11.0479 3.70002 11.5896 3.65002 11.9646L3.34169 14.6646C3.23335 15.6396 3.93335 16.3063 4.90002 16.1396L7.58335 15.6813C7.95835 15.6146 8.48335 15.3396 8.74169 15.0563L15.5834 7.81459C16.7667 6.56459 17.3 5.13959 15.4584 3.39792C13.625 1.67292 12.2334 2.28125 11.05 3.53125Z"
      stroke="#C4C4C4"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.90833 4.73959C10.2667 7.03959 12.1333 8.79792 14.45 9.03125"
      stroke="#C4C4C4"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
