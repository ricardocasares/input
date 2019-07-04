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
    h3: "#444444",
    strong: "#CCCCCC"
  },
  size: {
    h1: "1.802em",
    h2: "1.602em",
    h3: "1.402em",
    h4: "1.224em",
    h5: "1.166em",
    small: "0.889em",
    default: "1em"
  },
  weight: {
    light: 100,
    default: 400,
    bold: 500
  }
};

export type Font = typeof font;
