import styled from "styled-components";
import Button from "./Button";
import { ButtonProps } from "./types";

const IconButton = styled(Button)<ButtonProps>`
  padding: 0;
  width: ${({ size }) => (size === "sm" ? "16px" : "24px")};
  height: 100%;
`;

export default IconButton;
