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
  image: string;
} & Box;

export const MarketingBox = styled(Box)<MarketingBox>`
  display: flex;
  height: 100vh;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: relative;

  &::after {
    content: "";
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: -1;
    background-repeat: no-repeat;
    background-image: ${props => `url(${props.image})`};
    animation: ${bg} 1s ease;

    ${media({
      backgroundSize: ["90%", "75%", "60%", "60%"],
      backgroundPosition: ["center 40%", "center 30%", "center right 20px"]
    })}
  }

  ${media({
    justifyContent: ["flex-end", "flex-end", "center"]
  })}
`;
