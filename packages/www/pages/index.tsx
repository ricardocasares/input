import React from "react";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Logo } from "@/components/Logo";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { MarketingBox } from "@/components/MarketingBox";
import { Container } from "@/components/Container";

export default () => (
  <Container>
    <Bar>
      <Container>
        <Logo beta>input</Logo>
      </Container>
    </Bar>
    <MarketingBox image="/static/analysis.svg">
      <Box padding="20px">
        <Text as="h4" w="bold">
          Priceless feedback
        </Text>

        <Text as="p">
          Let your processes feel the joy of{" "}
          <Text as="strong" w="bold">
            data-driven
          </Text>{" "}
          decisions
        </Text>

        <Button kind="cta">Get started</Button>
      </Box>
    </MarketingBox>
  </Container>
);
