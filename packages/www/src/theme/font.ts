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
    h1: "3.052em",
    h2: "2.441em",
    h3: "1.953em",
    h4: "1.563em",
    h5: "1.25em",
    default: "1em"
  },
  weight: {
    light: 100,
    default: 300,
    bold: 400
  }
};

export type Font = typeof font;
