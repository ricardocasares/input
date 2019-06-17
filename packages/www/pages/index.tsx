import React from "react";
import Link from "next/link";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Logo } from "@/components/Logo";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { MarketingBox } from "@/components/MarketingBox";
import { Container } from "@/components/Container";
import { Analysis } from "@/components/Actions/Analysis";

const IndexPage = () => (
  <Container>
    <Bar>
      <Container>
        <Link href="/">
          <Logo beta>input</Logo>
        </Link>
      </Container>
    </Bar>
    <MarketingBox>
      <Box>
        <Text as="h1" w="bold">
          Priceless feedback
        </Text>

        <Text as="p">
          Let your processes feel the joy of{" "}
          <Text as="strong">data-driven</Text> decisions
        </Text>

        <Link href="/login" prefetch>
          <Button as="a" href="/login" kind="cta">
            Get started
          </Button>
        </Link>
      </Box>
      <Analysis />
    </MarketingBox>
  </Container>
);

export default IndexPage;
