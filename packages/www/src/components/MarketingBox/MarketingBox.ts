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

export type MarketingBox = {
  flip?: boolean;
} & Box;

export const MarketingBox = styled(Box)<MarketingBox>`
  display: flex;
  height: 100%;
  flex-direction: row;
  position: relative;
  padding: 20px;

  & > svg {
    margin: 0 auto;
    flex-grow: 1;
    animation: ${bg} 0.3s ease-in;
    ${media({
      maxWidth: ["100%", "75%", "50%"]
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

  ${({ flip }) =>
    media({
      flexDirection: [
        "column-reverse",
        "column-reverse",
        flip ? "row-reverse" : "row"
      ]
    })}
`;
