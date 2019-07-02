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
  ctx.id = ctx.get(header) || nanoid();
  await next();
};
