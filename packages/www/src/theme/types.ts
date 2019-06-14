import { Space } from "./space";
import { Font } from "./font";
import { Colors } from "./color";
import { Button } from "./button";

export type Theme = {
  font: Font;
  space: Space;
  color: Colors;
  button: Button;
};
