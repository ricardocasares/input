import fetch from "isomorphic-unfetch";

let TOKEN: string;
let EXPIRE: number;

const PAYPAL_URL = process.env.PAYPAL_URL;
const PAYPAL_OAUTH = "v1/oauth/token";
const PAYPAL_CLIENT = process.env.PAYPAL_CLIENT;
const PAYPAL_SECRET = process.env.PAYPAL_SECRET;

export type OAuthResponse = {
  expires_in: number;
  access_token: string;
};

export const paypal = async (
  path: string,
  init: RequestInit = { headers: {} }
) => {
  if (!EXPIRE || EXPIRE < Date.now()) {
    const { expires_in, access_token } = await fetch(
      `${PAYPAL_URL}/${PAYPAL_OAUTH}`,
      {
        headers: {
          Authorization: `Basic ${PAYPAL_CLIENT}:${PAYPAL_SECRET}`
        }
      }
    ).then(r => r.json());

    TOKEN = access_token;
    EXPIRE = new Date().setTime(Date.now() + expires_in);
  }

  return fetch(`${PAYPAL_URL}${path}`, {
    ...init,
    headers: {
      ...init.headers,
      Authorization: `Bearer ${TOKEN}`
    }
  });
};
