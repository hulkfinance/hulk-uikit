import styled from "styled-components";
import Text from "../Text/Text";
import { tags, sizes, HeadingProps } from "./types";

const style = {
  [sizes.MD]: {
    fontSize: "20px",
    fontSizeLg: "20px",
  },
  [sizes.LG]: {
    fontSize: "20px",
    fontSizeLg: "20px",
  },
  [sizes.XL]: {
    fontSize: "28px",
    fontSizeLg: "32px",
  },
  [sizes.XXL]: {
    fontSize: "48px",
    fontSizeLg: "56px",
  },
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  font-size: ${({ size }) => style[size || sizes.MD].fontSize};
  font-weight: bold;
  line-height: 1.1;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ size }) => style[size || sizes.MD].fontSizeLg};
  }
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
