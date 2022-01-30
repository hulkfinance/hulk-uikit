import styled from "styled-components";
import { scales } from "../Checkbox/types";
import { ToggleProps, HandleProps, InputProps, ScaleKeys } from "./types";

const scaleKeyValues = {
  sm: {
    handleHeight: "16px",
    handleWidth: "16px",
    handleLeft: "0px",
    handleTop: "0px",
    checkedLeft: "calc(100% - 18px)",
    toggleHeight: "20px",
    toggleWidth: "36px",
  },
  md: {
    handleHeight: "36px",
    handleWidth: "36px",
    handleLeft: "0px",
    handleTop: "0px",
    checkedLeft: "calc(100% - 36px)",
    toggleHeight: "40px",
    toggleWidth: "72px",
  },
};

const getScale = (property: ScaleKeys) => ({ scale = scales.MD }: ToggleProps) => {
  return scaleKeyValues[scale][property];
};

export const Handle = styled.div<HandleProps>`
  background-color: ${({ theme }) => theme.toggle.handleBackground};
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.toggle.handleBackground};
  height: ${getScale("handleHeight")};
  left: ${getScale("handleLeft")};
  position: absolute;
  top: ${getScale("handleTop")};
  transition: all 200ms ease-in;
  width: ${getScale("handleWidth")};
  z-index: 1;
`;

export const Input = styled.input<InputProps>`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: ${getScale("checkedLeft")};
  }

  &:focus + ${Handle} {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

const StyledToggle = styled.div<ToggleProps>`
  align-items: center;
  background-color: ${({ checked }) => checked ? '#fff' : 'transparent'};
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  height: ${getScale("toggleHeight")};
  position: relative;
  transition: background-color 200ms;
  width: ${getScale("toggleWidth")};
`;

export default StyledToggle;
