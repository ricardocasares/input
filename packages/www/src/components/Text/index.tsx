import { styled } from "@/styled";
import { mapToTheme as theme } from "styled-map";

export type Text = {
  as?: string;
  f?: "mono" | "serif";
  w?: "light" | "bold";
};

export const Text = styled.p<Text>`
  font-size: ${theme("font.size", "as")};
  font-family: ${theme("font.family", "f")};
  font-weight: ${theme("font.weight", "w")};
  color: ${theme("font.color", "as")};
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
