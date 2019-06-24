import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Nav } from "@/components/Link";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Logo } from "@/components/Logo";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { MarketingBox } from "@/components/MarketingBox";
import { Analysis } from "@/components/Actions/Analysis";

const Global = dynamic(() => import("@/components/Actions/Global"), {
  ssr: false
});

const Priceless = dynamic(() => import("@/components/Actions/Priceless"), {
  ssr: false
});

const IndexPage = () => (
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
          Priceless feedback
        </Text>

        <Text as="p">
          Drive your ideas, products and projects with{" "}
          <Text as="strong">real user feedback</Text>
        </Text>

        <Link href="/login" prefetch>
          <Button as="a" href="/login" kind="cta">
            Get started
          </Button>
        </Link>
      </Box>
      <Analysis />
    </MarketingBox>
    <MarketingBox flip>
      <Box>
        <Text as="h1" w="bold">
          Global reach
        </Text>

        <Text as="p">
          Access a <Text as="strong">global audience</Text> with different
          professional backgrounds and skills
        </Text>

        <Link href="/login" prefetch>
          <Button as="a" href="/login" kind="cta">
            Get started
          </Button>
        </Link>
      </Box>
      <Global />
    </MarketingBox>
    <MarketingBox>
      <Box>
        <Text as="h1" w="bold">
          Did we mention priceless?
        </Text>

        <Text as="p">
          Our service is free for campaigns with open feedback, <br />
          start private campaigns for as little as <Text as="strong">$1</Text>
        </Text>

        <Link href="/login" prefetch>
          <Button as="a" href="/login" kind="cta">
            Pricing
          </Button>
        </Link>
      </Box>
      <Priceless />
    </MarketingBox>
  </Container>
);

export default IndexPage;
