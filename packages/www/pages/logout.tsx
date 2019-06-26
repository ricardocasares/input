import React, { useEffect } from "react";
import { destroyCookie } from "nookies";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Text } from "@/components/Text";
import { Block } from "@/components/Block";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Login } from "@/components/Actions/Login";

const LogoutPage = () => {
  useEffect(() => {
    destroyCookie(null, "token", {});
    localStorage.setItem("logout", `${Date.now()}`);
  });

  return (
    <Block>
      <Bar />
      <Section>
        <Box>
          <Text as="h1" w="bold">
            See you later!
          </Text>

          <Text as="p">
            Thanks for using <Text as="strong">Input</Text>
          </Text>

          <Button as="a" href="/api/auth" kind="cta">
            Ready for more?
          </Button>
        </Box>
        <Login />
      </Section>
    </Block>
  );
};

export default LogoutPage;
