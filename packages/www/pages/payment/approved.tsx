import React from "react";
import Link from "next/link";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Block } from "@/components/Block";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Partners } from "@/components/Actions/Partners";

const PaymentApproved = () => (
  <Block>
    <Bar />
    <Block>
      <Section>
        <Box>
          <Text as="h1">Hooray!</Text>

          <Text as="p">Your payment has been accepted, let's begin</Text>

          <Link href="/dashboard" prefetch>
            <Button as="a" href="/dashboard" kind="cta">
              Create a token
            </Button>
          </Link>
        </Box>
        <Partners />
      </Section>
    </Block>
  </Block>
);

export default PaymentApproved;
