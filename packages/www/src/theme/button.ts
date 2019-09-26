export const button = {
  color: {
    cta: "#fff",
    danger: "#f03e3e",
    default: "#888888",
    success: "#0ca678",
    link: "rgb(0, 118, 255)"
  },
  background: {
    cta: "transparent",
    danger: "transparent",
    default: "transparent",
    success: "transparent",
    link: "transparent"
  },
  shadow: {
    cta: "rgb(0, 118, 255)",
    danger: "#f03e3e",
    default: "#888888",
    success: "#0ca678",
    link: "transparent"
  },
  size: {
    small: "5px 10px",
    big: "10px 20px",
    default: "8px 12px"
  },
  font: {
    small: ".85rem",
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
