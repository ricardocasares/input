import { create } from "../../../app";
import { paypal } from "../../../services/paypal";
import { hasura } from "../../../services/hasura";
import { verifyHasura } from "../../../middleware/varify-hasura";
import { Subscription } from "../../../types";
import {
  PAYPAL_SUBSCRIPTIONS_PATH,
  PAYPAL_REJECTED_URI,
  PAYPAL_APPROVED_URI,
  REQ_ID_HEADER
} from "../../../constants";

const mutation = ({
  id,
  status,
  approval_url,
  subscription_id
}: Record<string, string>) => `mutation {
  update_subscriptions(where: {
    id: {_eq: ${id}}},
    _set: {
      subcription_id: "${subscription_id}",
      status: "${status}",
      approval_url: "${approval_url}"
      updated_at: "${new Date().toISOString()}"
    }) {
      affected_rows
    }
}`;

export default create(app =>
  app.use(verifyHasura()).use(async (ctx, next) => {
    const {
      event: {
        data: { new: subscription }
      }
    } = ctx.request.body;

    const { id, plan_id } = subscription;

    const {
      data: { id: subscription_id, status, links }
    } = await paypal.post<Subscription>(
      PAYPAL_SUBSCRIPTIONS_PATH,
      {
        plan_id,
        quantity: "1",
        auto_renewal: true,
        application_context: {
          brand_name: "input",
          user_action: "SUBSCRIBE_NOW",
          return_url: PAYPAL_APPROVED_URI,
          cancel_url: PAYPAL_REJECTED_URI
        }
      },
      { headers: { [REQ_ID_HEADER]: ctx.get(REQ_ID_HEADER) } }
    );

    const [{ href: approval_url }] = links.filter(
      link => link.rel === "approve"
    );

    await hasura.post(
      "/graphql",
      {
        query: mutation({ id, status, approval_url, subscription_id })
      },
      { headers: { [REQ_ID_HEADER]: ctx.get(REQ_ID_HEADER) } }
    );

    ctx.status = 200;

    await next();
  })
);
