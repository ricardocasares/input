import { styled } from "@/styled";
import { media } from "@/theme/utils";
import { ColorProperty } from "csstype";

type StringOrNumber = string | number;
type ResponsiveProp = StringOrNumber | StringOrNumber[];

export type Box = {
  align?: ResponsiveProp;
  flexDirection?: ResponsiveProp;
  flexGrow?: ResponsiveProp;
  display?: ResponsiveProp;
  alignItems?: ResponsiveProp;
  backgroundColor?: ResponsiveProp;
  color?: ColorProperty;
  height?: ResponsiveProp;
  justifyContent?: ResponsiveProp;
  width?: ResponsiveProp;
  padding?: ResponsiveProp;
};

export const Box = styled.div<Box>`
  ${({
    // @ts-ignore
    children,
    ...props
  }) => media(props)};
`;
