import nanoid from "nanoid";
import { MW } from "koa";
import { REQ_ID_HEADER } from "../constants";

export const correlate = (header = REQ_ID_HEADER): MW => async (ctx, next) => {
  if (!ctx.get(header)) {
    const id = nanoid();
    ctx.set(header, id);
    ctx.req.headers[header] = id;
  } else {
    ctx.set(header, ctx.get(header));
  }

  await next();
};
