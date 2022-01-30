import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#clip0_302_626)">
        <g clipPath="url(#clip1_302_626)">
          <path d="M18.1403 16.3843C14.4713 21.3629 5.60777 21.0547 5.60777 21.0547C5.60777 21.0547 2.69718 12.6859 6.36613 7.70735C10.0351 2.72881 18.8926 3.0451 18.8926 3.0451C18.8926 3.0451 21.8032 11.4139 18.1403 16.3843Z" stroke="#3CBD0E" strokeWidth="1.41705" strokeMiterlimit="10"/>
          <path d="M15.4313 6.00176C9.37636 7.93941 7.89163 13.3834 7.2237 15.8082" stroke="#3CBD0E" strokeWidth="1.41705" strokeMiterlimit="10"/>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_302_626">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
        <clipPath id="clip1_302_626">
          <rect width="16.0431" height="24.1" fill="white" transform="translate(12.9414 -2.40918) rotate(36.3885)"/>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
