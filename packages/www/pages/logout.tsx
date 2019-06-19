import React, { useEffect } from "react";
import Link from "next/link";
import { Nav } from "@/components/Link";
import { destroyCookie } from "nookies";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Logo } from "@/components/Logo";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { MarketingBox } from "@/components/MarketingBox";
import { Thanks } from "@/components/Actions/Thanks";
import { Container } from "@/components/Container";

const LogoutPage = () => {
  useEffect(() => {
    destroyCookie(null, "token", {});
    localStorage.setItem("logout", `${Date.now()}`);
  });

  return (
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
            See you later!
          </Text>

          <Text as="p">
            Thanks for using <Text as="strong">Input</Text>
          </Text>

          <Button as="a" href="/api/auth" kind="cta">
            Ready for more?
          </Button>
        </Box>
        <Thanks />
      </MarketingBox>
    </Container>
  );
};

export default LogoutPage;
