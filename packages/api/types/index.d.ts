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
