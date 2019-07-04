import { promisify } from "util";
import { randomBytes } from "crypto";
import { parse, format, URLSearchParams } from "url";
import { create } from "../app";
import {
  NONCE_BYTES,
  NONCE_ENCODING,
  AUTH0_URL,
  AUTH0_SCOPES,
  AUTH0_CLIENT_ID,
  AUTH0_CONNECTION,
  AUTH0_REDIRECT_URI,
  AUTH0_RESPONSE_TYPE
} from "../constants";

console.log(AUTH0_REDIRECT_URI);

// helper functions
const random = promisify(randomBytes);

const getAuthorizeUrl = async () => {
  const url = parse(AUTH0_URL);
  const nonce = await random(NONCE_BYTES)
    .then(token => token.toString(NONCE_ENCODING))
    .catch(err => {
      console.log(err);
      return Date.now().toString();
    });

  const search = new URLSearchParams({
    nonce,
    scopes: AUTH0_SCOPES,
    client_id: AUTH0_CLIENT_ID,
    connection: AUTH0_CONNECTION,
    redirect_uri: AUTH0_REDIRECT_URI,
    response_type: AUTH0_RESPONSE_TYPE
  }).toString();

  return format({ ...url, search });
};

export default create(app =>
  app.use(async ctx => {
    ctx.redirect(await getAuthorizeUrl());
  })
);
