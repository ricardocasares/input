import React from "react";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Logo } from "@/components/Logo";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { MarketingBox } from "@/components/MarketingBox";
import { Container } from "@/components/Container";

const LoginPage = () => (
  <Container>
    <Bar>
      <Container>
        <Logo beta>input</Logo>
      </Container>
    </Bar>
    <MarketingBox image="/static/login.svg">
      <Box padding="20px">
        <Text as="h4" w="bold">
          Login first
        </Text>

        <Text as="p">
          You need an account to use our services, let's fix that
        </Text>

        <Button as="a" href="/api/auth" kind="cta">
          Login with LinkedIn
        </Button>
      </Box>
    </MarketingBox>
  </Container>
);

export default LoginPage;
