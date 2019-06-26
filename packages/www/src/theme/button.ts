export const button = {
  color: {
    cta: "rgb(0, 118, 255)",
    danger: "#FFFFFF",
    default: "#333333",
    success: "#FFFFFF"
  },
  background: {
    cta: "transparent",
    danger: "#f03e3e",
    default: "#FFFFFF",
    success: "#0ca678"
  },
  shadow: {
    cta: "rgb(0, 118, 255)",
    danger: "#f03e3e",
    default: "#333333",
    success: "#0ca678"
  },
  size: {
    small: "5px 10px",
    big: "10px 20px",
    default: "8px 12px"
  },
  font: {
    small: ".65rem",
    default: "1rem",
    big: "1.2rem"
  },
  radius: {
    small: "4px",
    default: "4px",
    big: "6px"
  }
};

export type Button = typeof button;
