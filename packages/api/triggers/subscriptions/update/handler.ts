import { create } from "../../app";
import { paypal } from "../../../../services/paypal";

export default create(app =>
  app.use(async ctx => {
    const plans = await paypal("/v1/billing/plans");
    ctx.body = plans;
  })
);
