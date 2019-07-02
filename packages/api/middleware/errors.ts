import { Middleware } from "koa";

export const errors = (): Middleware => async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.type = "json";
    ctx.body = {
      rid: ctx.id,
      message: err.message
    };
  }
};
