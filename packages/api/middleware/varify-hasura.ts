import { Middleware } from "koa";
import { SECRET, REQ_SECRET_HEADER } from "../constants";

export const verifyHasura = (): Middleware => async (ctx, next) => {
  if (SECRET !== ctx.get(REQ_SECRET_HEADER)) {
    ctx.throw(401);
  }

  await next();
};
