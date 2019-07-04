export const SECRET = process.env.HASURA_GRAPHQL_ADMIN_SECRET || "";
export const AUTH0_SCOPES = "openid profile email";
export const AUTH0_CONNECTION = "linkedin";
export const AUTH0_RESPONSE_TYPE = "token id_token";
export const AUTH0_URL = process.env.INPUT_AUTH0_URL || "";
export const AUTH0_CLIENT_ID = process.env.INPUT_AUTH0_CLIENT || "";
export const AUTH0_REDIRECT_URI = process.env.INPUT_AUTH0_REDIRECT_URI || "";
export const REQ_ID_HEADER = "x-req-id";
export const REQ_SECRET_HEADER = "x-secret";
export const REQ_HASURA_HEADER = "x-hasura-admin-secret";
export const HASURA_URL = process.env.INPUT_HASURA_URL || "";
export const PAYPAL_URL = process.env.INPUT_PAYPAL_URL || "";
export const PAYPAL_CLIENT = process.env.INPUT_PAYPAL_CLIENT || "";
export const PAYPAL_SECRET = process.env.INPUT_PAYPAL_SECRET || "";
export const PAYPAL_WEBHOOK_ID = process.env.INPUT_PAYPAL_WEBHOOK_ID || "";
export const PAYPAL_PLANS_PATH = "/v1/billing/plans";
export const PAYPAL_SUBSCRIPTIONS_PATH = "/v1/billing/subscriptions";
export const PAYPAL_VERIFY_PATH = "/v1/notifications/verify-webhook-signature";
export const PAYPAL_VERIFY_SUCCESS = "SUCCESS";
export const PAYPAL_APPROVED_URI = process.env.INPUT_PAYPAL_APPROVED_URI || "";
export const PAYPAL_REJECTED_URI = process.env.INPUT_PAYPAL_REJECTED_URI || "";
export const NONCE_BYTES = 16;
export const NONCE_ENCODING = "base64";