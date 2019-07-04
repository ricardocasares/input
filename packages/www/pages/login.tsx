import React from "react";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Block } from "@/components/Block";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Login } from "@/components/Actions/Login";
import { Section } from "@/components/Section";

const SignUp = () => (
  <Block>
    <Bar />
    <Section>
      <Box>
        <Text as="h2" w="bold">
          Don't be a stranger
        </Text>

        <Text as="p">
          You need an account to use our services, let's fix that
        </Text>

        <Button as="a" href="/api/auth" kind="cta">
          Signup with GitHub
        </Button>
      </Box>
      <Login />
    </Section>
  </Block>
);

export default SignUp;
