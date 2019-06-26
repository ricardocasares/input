import React from "react";
import Link from "next/link";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Block } from "@/components/Block";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Circuit } from "@/components/Actions/Circuit";

const IndexPage = () => (
  <Block>
    <Bar />
    <Block>
      <Section>
        <Box>
          <Text as="h1">Instant data</Text>

          <Text as="p">
            Consume any website data as a <Text as="strong">GraphQL API</Text>
          </Text>

          <Link href="/login" prefetch>
            <Button as="a" href="/login" kind="cta">
              Get started
            </Button>
          </Link>
        </Box>
        <Circuit />
      </Section>
    </Block>
  </Block>
);

export default IndexPage;
