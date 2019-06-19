import { styled } from "@/styled";

export type Bar = {};

export const Bar = styled.header<Bar>`
  position: fixed;
  background: #ffffff99;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  z-index: 1;
`;
