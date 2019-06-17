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
    p: "#666666",
    h1: "#000000",
    h2: "#000000"
  },
  size: {
    h1: "1.802em",
    h2: "1.602em",
    h3: "1.424em",
    h4: "1.266em",
    h5: "1.125em",
    small: "0.889em",
    default: "1em"
  },
  weight: {
    light: 100,
    default: 300,
    bold: 400
  }
};

export type Font = typeof font;
