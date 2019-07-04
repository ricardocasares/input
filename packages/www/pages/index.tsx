import React from "react";
import Link from "next/link";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Block } from "@/components/Block";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Globe } from "@/components/Actions/Globe";

const IndexPage = () => (
  <Block>
    <Bar />
    <Block>
      <Section>
        <Box>
          <Text as="h1">Instant Data</Text>

          <Text as="p">
            Consume any website as a <Text as="strong">GraphQL</Text> endpoint
          </Text>

          <Link href="/signup" prefetch>
            <Button as="a" href="/signup" kind="cta">
              Get started
            </Button>
          </Link>
        </Box>
        <Globe />
      </Section>
    </Block>
  </Block>
);

export default IndexPage;
