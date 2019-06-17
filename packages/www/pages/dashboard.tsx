import React from "react";
import Link from "next/link";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Logo } from "@/components/Logo";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
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
    <MarketingBox image="/static/preferences.svg">
      <Box padding="20px">
        <Text as="h4" w="bold">
          My preferences
        </Text>

        <Link href="/logout" prefetch>
          <Button as="a" href="/logout" kind="cta">
            Logout
          </Button>
        </Link>
      </Box>
    </MarketingBox>
  </Container>
);

export default withAuthSync(DashboardPage);
