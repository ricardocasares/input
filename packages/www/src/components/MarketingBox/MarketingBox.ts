import { keyframes } from "@emotion/core";
import { styled } from "@/styled";
import { media } from "@/theme/utils";
import { Box } from "@/components/Box";

const bg = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const MarketingBox = styled(Box)<Box>`
  display: flex;
  height: 100%;
  flex-direction: row;
  position: relative;
  padding: 20px;

  & > svg {
    width: 80%;
    margin: 0 auto;
    flex-grow: 1;

    ${media({
      width: ["100%", "80%", "80%"]
    })}
  }

  & > div {
    display: flex;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    ${media({
      justifyContent: ["flex-end", "flex-end", "center", "center"]
    })}
  }

  ${media({
    flexDirection: ["column-reverse", "column-reverse", "row", "row"]
  })}
`;
