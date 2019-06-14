import { HTMLAttributes } from "react";
import { mapToTheme as theme } from "styled-map";
import { styled } from "@/styled";

export type Button = {
  kind?: "cta" | "danger" | "success";
  size?: "small" | "big" | "large";
} & HTMLAttributes<HTMLButtonElement>;

export const Button = styled.button<Button>`
  color: ${theme("button.color", "kind")};
  border: none;
  background: ${theme("button.background", "kind")};
  box-shadow: 0 0 0 2px ${theme("button.shadow", "kind")}50;
  padding: ${theme("button.size", "size")};
  font-size: ${theme("button.font", "size")};
  border-radius: ${theme("button.radius", "size")};
  margin: ${theme("space", "size")};
  transition: background 0.3s, box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 0 3px ${theme("button.shadow", "kind")}80;
  }
`;
