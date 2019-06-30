import Koa from "koa";
import helmet from "koa-helmet";
import parser from "koa-bodyparser";

export function create(main: (app: Koa) => void) {
  const app = new Koa().use(helmet()).use(parser());

  main(app);

  return app.callback();
}
