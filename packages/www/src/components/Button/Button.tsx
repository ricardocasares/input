import { HTMLAttributes } from "react";
import { styled } from "@/styled";
import { mapToTheme as theme } from "styled-map";

export type Button = {
  kind?: "primary";
  size?: "small" | "big" | "large";
} & HTMLAttributes<HTMLButtonElement>;

export const Button = styled.button<Button>`
  color: ${theme("button.color", "kind")};
  border: none;
  background: ${theme("button.background", "kind")};
  box-shadow: 0 0 0 2px ${theme("button.background", "kind")}80;
  padding: ${theme("button.size", "size")};
  font-size: ${theme("button.font", "size")};
  border-radius: ${theme("button.radius", "size")};
  margin: ${theme("space", "size")};
  transition: background 0.3s, box-shadow 0.3s;
  letter-spacing: 0.5px;

  &:hover {
    background: #8a84fe;
    box-shadow: 0 0 0 3px #8a84fe80;
  }
`;
