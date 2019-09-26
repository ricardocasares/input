import { HTMLAttributes } from "react";
import { mapToTheme as theme } from "styled-map";
import { styled } from "@/styled";

export type Button = {
  as?: string;
  href?: string;
  kind?: "cta" | "link" | "danger" | "success";
  size?: "small" | "big" | "large";
} & HTMLAttributes<HTMLButtonElement>;

export const Button = styled.button<Button>`
  border: none;
  line-height: 1rem;
  display: inline-block;
  text-decoration: none;
  color: ${theme("button.color", "kind")};
  background: ${theme("button.background", "kind")};
  box-shadow: 0 0 0 2px ${theme("button.shadow", "kind")};
  padding: ${theme("button.size", "size")};
  font-size: ${theme("button.font", "size")};
  font-family: ${({ theme }) => theme.font.family.default};
  border-radius: ${theme("button.radius", "size")};
  transition: color 0.3s, background 0.3s, box-shadow 0.3s;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 3px ${theme("button.shadow", "kind")};
  }
`;
