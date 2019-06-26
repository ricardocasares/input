import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Text } from "@/components/Text";
import { Login } from "@/components/Actions/Login";
import { Section } from "@/components/Section";
import { parse } from "querystring";
import { setCookie } from "nookies";
import { Block } from "@/components/Block";

const CallbackPage = () => {
  const router = useRouter();
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
    <Block>
      <Bar />
      <Section>
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
      </Section>
    </Block>
  );
};

export default CallbackPage;
