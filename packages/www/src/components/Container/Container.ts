import { styled } from "@/styled";
import { media } from "@/theme/utils";
import { Box } from "@/components/Box";

export const Container = styled(Box)<Box>`
  margin: 0 auto;

  ${media({
    width: ["90%", "90%", "90%", "70%"]
  })}
`;
