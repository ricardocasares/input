import React from "react";
import Link from "next/link";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Block } from "@/components/Block";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Piggy } from "@/components/Actions/Piggy";

const PaymentCancelled = () => (
  <Block>
    <Bar />
    <Block>
      <Section>
        <Box>
          <Text as="h1">We understand</Text>

          <Text as="p">We just met, you would like to explore a bit more</Text>

          <Link href="/dashboard" prefetch>
            <Button as="a" href="/dashboard" kind="cta">
              See pricing
            </Button>
          </Link>
        </Box>
        <Piggy />
      </Section>
    </Block>
  </Block>
);

export default PaymentCancelled;
