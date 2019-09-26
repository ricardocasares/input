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
    p: "#888888",
    h1: "#FFFFFF",
    strong: "#CCCCCC",
    small: "#666"
  },
  size: {
    h1: "1.802em",
    h2: "1.602em",
    h3: "1.402em",
    h4: "1.224em",
    h5: "1.166em",
    small: "0.789em",
    default: "1em"
  },
  weight: {
    light: 100,
    default: 400,
    bold: 500
  }
};

export type Font = typeof font;
