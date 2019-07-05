export type Link = {
  href: string;
  rel: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
};

export type Subscription = {
  id: string;
  status: "APPROVAL_PENDING" | "CREATED";
  links: Link[];
};

declare module "koa" {
  interface MW extends Middleware<{}, Context> {}
}
