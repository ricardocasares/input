import { font } from "./font";
import { space } from "./space";
import { color } from "./color";
import { button } from "./button";

export const theme = {
  font,
  space,
  color,
  button
};

export type Theme = typeof theme;
