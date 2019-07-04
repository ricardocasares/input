import nanoid from "nanoid";
import { Middleware } from "koa";
import { REQ_ID_HEADER } from "../constants";

declare module "koa" {
  interface Context {
    id: string;
  }
}

export const correlate = (header = REQ_ID_HEADER): Middleware => async (
  ctx,
  next
) => {
  if (!ctx.get(header)) {
    const id = nanoid();
    ctx.set(header, id);
    ctx.req.headers[header] = id;
  } else {
    ctx.set(header, ctx.get(header));
  }

  await next();
};
