import React from "react";
import Link from "next/link";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Logo } from "@/components/Logo";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Dashboard } from "@/components/Actions/Dashboard";
import { MarketingBox } from "@/components/MarketingBox";
import { Container } from "@/components/Container";
import { withAuthSync } from "@/hocs/withAuthSync";

const DashboardPage = () => (
  <Container>
    <Bar>
      <Container>
        <Logo beta>input</Logo>
      </Container>
    </Bar>
    <MarketingBox>
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
    </MarketingBox>
  </Container>
);

export default withAuthSync(DashboardPage);
