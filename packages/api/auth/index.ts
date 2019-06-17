import { promisify } from "util";
import { randomBytes } from "crypto";
import { RequestListener } from "http";
import { parse, format, URLSearchParams } from "url";

// constants
const NONCE_BYTES = 16;
const NONCE_ENCODING = "base64";
const SCOPES = "openid profile email";
const CONNECTION = "linkedin";
const RESPONSE_TYPE = "token id_token";
const CLIENT_ID = process.env.INPUT_AUTH0_CLIENT;
const ENDPOINT = process.env.INPUT_AUTH0_ENDPOINT;
const REDIRECT_URI = process.env.INPUT_AUTH0_REDIRECT;

// lambda function
const handler: RequestListener = async (req, res) => {
  console.log("ENV=====", ENDPOINT);
  res.writeHead(302, {
    Location: await getAuthorizeUrl()
  });

  res.end();
};

// helper functions
const random = promisify(randomBytes);
const getAuthorizeUrl = async () => {
  const url = parse(ENDPOINT);
  const nonce = await random(NONCE_BYTES)
    .then(token => token.toString(NONCE_ENCODING))
    .catch(err => {
      console.log(err);
      return Date.now().toString();
    });

  const search = new URLSearchParams({
    nonce,
    scopes: SCOPES,
    client_id: CLIENT_ID,
    connection: CONNECTION,
    redirect_uri: REDIRECT_URI,
    response_type: RESPONSE_TYPE
  }).toString();

  return format({ ...url, search });
};

export default handler;
