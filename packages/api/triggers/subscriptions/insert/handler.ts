import { create } from "../../../app";
import { hasura } from "../../../services/hasura";
import { paypal } from "../../../services/paypal";
import { verifyHasura } from "../../../middleware/varify-hasura";
import { PAYPAL_PLANS_PATH } from "../../../constants";

// const mutation = `mutation {
//   update_subscriptions(where: {id: {_eq: "1"}}, _set: {paypal_subscription_id: "123"}) {
//     affected_rows
//   }
// }`;

export default create(app =>
  app.use(verifyHasura()).use(async ctx => {
    const { data } = await paypal(PAYPAL_PLANS_PATH);
    console.log(data);
    ctx.body = data;
  })
);
