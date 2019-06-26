import React from "react";
import Link from "next/link";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Dashboard } from "@/components/Actions/Dashboard";
import { Section } from "@/components/Section";
import { Block } from "@/components/Block";
import { withAuthSync } from "@/hocs/withAuthSync";

const DashboardPage = () => (
  <Block>
    <Bar />
    <Section>
      <Box>
        <Text as="h1" w="bold">
          Dashboard
        </Text>

        <Text as="p">Create a new feedback form</Text>

        <Link href="/logout" prefetch>
          <Button as="a" href="/logout" kind="cta">
            Logout
          </Button>
        </Link>
      </Box>
      <Dashboard />
    </Section>
  </Block>
);

export default withAuthSync(DashboardPage);
