import { styled } from "@/styled";

export type Bar = {};

export const Bar = styled.header<Bar>`
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: white;
  z-index: 1;
`;
