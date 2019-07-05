import { MW } from "koa";

export const errors = (): MW => async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.log.error(err);
    ctx.status = err.status || 500;
    ctx.body = {
      message: err.message
    };
  }
};
