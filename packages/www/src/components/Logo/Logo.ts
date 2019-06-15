import map from "styled-map";
import { styled } from "@/styled";

const display = {
  beta: "inline-block",
  default: "none"
};

export type Logo = {
  beta?: boolean;
};

export const Logo = styled.h1<Logo>`
  font-size: 24px;
  font-family: ${({ theme }) => theme.font.family.default};
  padding: 20px;
  margin: 0;
  position: relative;
  &::after {
    content: "beta";
    display: ${map(display)};
    font-size: 8px;
    font-family: sans-serif;
    font-weight: normal;
    text-transform: uppercase;
    position: relative;
    top: -5px;
    right: -5px;
    color: #6c63ff;
    background: #f1f0ff;
    border-radius: 4px;
    padding: 2px 6px;
    z-index: -1;
  }
`;
