import React from "react";
import { Logo } from "@/components/Logo";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Box, MediaBox } from "@/components/Box";

export default function Index() {
  return (
    <MediaBox image="/static/analysis.svg">
      <Logo>input</Logo>
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
        <Button kind="primary">Get started</Button>
      </Box>
    </MediaBox>
  );
}
