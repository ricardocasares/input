import { styled } from "@/styled";
import { media } from "@/theme/utils";
import { Box } from "./Box";

export type MediaBox = {
  image: string;
} & Box;

export const MediaBox = styled(Box)<MediaBox>`
  display: flex;
  height: 100vh;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  background-repeat: no-repeat;
  background-image: ${props => `url(${props.image})`};

  ${media({
    backgroundSize: ["contain", "60vw"],
    backgroundPosition: ["0 40%", "bottom 20px right 20px"]
  })}
`;
