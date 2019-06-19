import React from "react";
import Link from "next/link";
import { Nav } from "@/components/Link";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Logo } from "@/components/Logo";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Login } from "@/components/Actions/Login";
import { MarketingBox } from "@/components/MarketingBox";
import { Container } from "@/components/Container";

const LoginPage = () => (
  <Container>
    <Bar>
      <Container display="flex" flexDirection="row">
        <Box flexGrow={1}>
          <Link href="/">
            <Logo beta>input</Logo>
          </Link>
        </Box>
        <Box>
          <nav>
            <Nav href="/api/auth">Login</Nav>
          </nav>
        </Box>
      </Container>
    </Bar>
    <MarketingBox>
      <Box>
        <Text as="h1" w="bold">
          Login first
        </Text>

        <Text as="p">
          You need an account to use our services, let's fix that.
        </Text>

        <Button as="a" href="/api/auth" kind="cta">
          Login with LinkedIn
        </Button>
      </Box>
      <Login />
    </MarketingBox>
  </Container>
);

export default LoginPage;
