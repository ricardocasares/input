import { parse, URLSearchParams } from "url";
import { RequestHandler } from "micro";

export const handler: RequestHandler = (req, res) => {
  const { query } = parse(req.url);
  const token = new URLSearchParams(query).get("token");

  if (!token) {
    res.writeHead(301, {
      Location: "/login"
    });
  }

  if (token) {
    res.writeHead(301, {
      Location: "/",
      "Set-Cookie": `token=${token}; path=/`
    });
  }

  res.end();
};

export default handler;
