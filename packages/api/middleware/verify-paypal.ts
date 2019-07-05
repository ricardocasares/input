import { MW } from "koa";
import { paypal } from "../services/paypal";
import { PAYPAL_VERIFY_SUCCESS, PAYPAL_VERIFY_PATH } from "../constants";

export const verifyPaypal = (): MW => async (ctx, next) => {
  const {
    "PAYPAL-CERT-URL": cert_url,
    "PAYPAL-AUTH-ALGO": auth_algo,
    "PAYPAL-TRANSMISSION-ID": transmission_id,
    "PAYPAL-TRANSMISSION-SIG": transmission_sig,
    "PAYPAL-TRANSMISSION-SIG": transmission_time
  } = ctx.req.headers;

  const webhook_id = process.env.PAYPAL_WEBHOOK_ID;
  const webhook_event = ctx.request.body;

  const { data } = await paypal.post(PAYPAL_VERIFY_PATH, {
    cert_url,
    auth_algo,
    webhook_id,
    webhook_event,
    transmission_id,
    transmission_sig,
    transmission_time
  });

  const { verification_status } = data;

  if (verification_status !== PAYPAL_VERIFY_SUCCESS) {
    ctx.throw(401);
  }

  await next();
};
