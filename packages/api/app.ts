import Koa, { Context } from "koa";
import helmet from "koa-helmet";
import parser from "koa-bodyparser";
import logger from "koa-pino-logger";
import { errors } from "./middleware/errors";
import { correlate } from "./middleware/correlate";

export function create(main: (app: Koa<{}, Context>) => void) {
  const app = new Koa<{}, Context>()
    .use(errors())
    .use(helmet())
    .use(parser())
    .use(correlate())
    .use(logger());

  main(app);

  return app.callback();
}
