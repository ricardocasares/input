import facepaint from "facepaint";

export const join = (x: string[]) => x.join(",");
export const media = facepaint([
  "@media(min-width: 420px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)"
]);
