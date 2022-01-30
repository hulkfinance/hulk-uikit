import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M16.05 12.05L21 17L16.05 21.9501L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.05005L9.364 3.46405L6.828 6.00005H20V8.00005H6.828L9.364 10.536L7.95 11.95L3 7.00005L7.95 2.05005Z" fill="#3CBD0E"/>
    </Svg>
  );
};

export default Icon;
