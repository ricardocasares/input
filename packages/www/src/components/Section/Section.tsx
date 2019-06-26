import { keyframes } from "@emotion/core";
import { styled } from "@/styled";
import { media } from "@/theme/utils";
import { Container } from "@/components/Container";

const bg = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Section = styled(Container)`
  display: flex;
  height: 100%;
  padding: 20px 0;
  justify-content: space-between;

  & > svg {
    margin: 0 auto;
    animation: ${bg} 0.3s ease-in;
    ${media({
      margin: ["0 auto"],
      maxWidth: ["100%", "80%", "35%"],
      flexGrow: [1, 1]
    })}
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${media({
      flexGrow: [0, 0, 1],
      justifyContent: ["flex-end", "flex-end", "center", "center"]
    })};
  }

  ${media({
    flexDirection: ["column-reverse", "column-reverse", "row"]
  })}
`;
