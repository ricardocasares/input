import Router from "next/router";
import { NextPageContext } from "next";
import { parseCookies } from "nookies";
import React, { Component, ComponentType } from "react";

export function withAuthSync<T>(WrappedComponent: ComponentType<T>) {
  return class withAuthSync extends Component<T> {
    static async getInitialProps(ctx: NextPageContext) {
      const token = auth(ctx);
      // @ts-ignore getInitialProps
      if (WrappedComponent.getInitialProps) {
        // @ts-ignore getInitialProps
        const props = await WrappedComponent.getInitialProps(ctx);
        return { ...props, token };
      }

      return { token };
    }

    handler = (event: StorageEvent) => {
      if (event.key === "logout") {
        Router.push("/logout");
      }
    };

    componentDidMount() {
      addEventListener("storage", this.handler);
    }

    componentWillUnmount() {
      removeEventListener("storage", this.handler);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export const auth = (ctx: NextPageContext) => {
  const { token } = parseCookies(ctx);

  if (ctx.res && !token) {
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();
    return;
  }

  if (!token) {
    Router.push("/login");
  }

  return token;
};
