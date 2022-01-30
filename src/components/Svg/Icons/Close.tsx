import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.5 20.0356L24.4282 27.9638L27.9637 24.4283L20.0355 16.5001L27.9637 8.57191L24.4282 5.03638L16.5 12.9646L8.57179 5.03638L5.03625 8.57191L12.9644 16.5001L5.03625 24.4283L8.57179 27.9638L16.5 20.0356Z" fill="#3CBD0E"/>
    </Svg>
  );
};

export default Icon;
