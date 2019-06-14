import facepaint from "facepaint";

export const join = (x: string[]) => x.join(",");
export const media = facepaint([
  "@media(min-width: 426px)",
  "@media(min-width: 769px)",
  "@media(min-width: 1025px)",
  "@media(min-width: 1441px)"
]);
