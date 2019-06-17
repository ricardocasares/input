import { join } from "./utils";

export const font = {
  family: {
    default: join([
      "Maison",
      "-apple-system",
      "BlinkMacSystemFont",
      "'Segoe UI'",
      "Helvetica",
      "sans-serif",
      "'Apple Color Emoji'",
      "'Segoe UI Emoji'",
      "'Segoe UI Symbol'"
    ]),
    mono: join([
      "'Maison Mono'",
      "'Courier New'",
      "Courier",
      "'Lucida Sans Typewriter'",
      "'Lucida Typewriter'",
      "monospace"
    ])
  },
  color: {
    p: "#777777",
    h1: "#000000",
    h2: "#000000"
  },
  size: {
    h1: "1.602em",
    h2: "1.402em",
    h3: "1.224em",
    h4: "1.166em",
    h5: "1.125em",
    small: "0.889em",
    default: "1em"
  },
  weight: {
    light: 100,
    default: 400,
    bold: 600
  }
};

export type Font = typeof font;
