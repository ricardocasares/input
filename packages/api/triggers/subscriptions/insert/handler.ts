import { create } from "../../app";

export default create(app =>
  app.use(async ctx => {
    ctx.body = { hello: "world" };
  })
);
