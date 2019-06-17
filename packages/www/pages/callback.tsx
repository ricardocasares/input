import Link from "next/link";
import { withRouter, WithRouterProps } from "next/router";
import React, { FunctionComponent, useState, useEffect } from "react";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Logo } from "@/components/Logo";
import { Text } from "@/components/Text";
import { Login } from "@/components/Actions/Login";
import { MarketingBox } from "@/components/MarketingBox";
import { Container } from "@/components/Container";
import { parse } from "querystring";
import { setCookie } from "nookies";

const CallbackPage: FunctionComponent<WithRouterProps> = ({ router }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const qs = parse(location.hash);
    const error = qs["#error"];
    const token = qs.id_token as string;
    router && router.prefetch("/dashboard");

    setTimeout(() => {
      if (error) {
        setError(true);
      } else {
        setCookie(null, "token", token, {});
        router && router.push("/dashboard");
      }
    }, 1500);
  });

  return (
    <Container>
      <Bar>
        <Container>
          <Logo beta>input</Logo>
        </Container>
      </Bar>
      <MarketingBox>
        <Box>
          <Text as="h1" w="bold">
            {error && "Oh no!"}
            {!error && "Hi there!"}
          </Text>

          {!error && <Text as="p">Hang on, we are logging you in...</Text>}
          {error && (
            <Text as="p">
              Something went wrong, please <a href="/api/auth">try again</a>.
            </Text>
          )}
        </Box>
        <Login />
      </MarketingBox>
    </Container>
  );
};

export default withRouter(CallbackPage);
