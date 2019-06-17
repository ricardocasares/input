import React from "react";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Logo } from "@/components/Logo";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

const IndexPage = () => (
  <Container>
    <Bar>
      <Container>
        <Logo beta>input</Logo>
      </Container>
    </Bar>
    <Box padding="0 20px">
      <Text as="h1">Hello world</Text>
      <Text as="h2">Hello world</Text>
      <Text as="h3">Hello world</Text>
      <Text as="h4">Hello world</Text>
      <Text as="h5">Hello world</Text>
      <Text>Hello world</Text>
      <Text as="small">Hello world</Text>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Box>
          <Button size="small">Hello world</Button>
          <Button>Hello world</Button>
          <Button size="big">Hello world</Button>
          <Button as="a" href="#" size="big">
            Hello world
          </Button>
        </Box>
        <Box>
          <Button size="small" kind="cta">
            Hello world
          </Button>
          <Button kind="cta">Hello world</Button>
          <Button size="big" kind="cta">
            Hello world
          </Button>
          <Button as="a" href="#" size="big" kind="cta">
            Hello world
          </Button>
        </Box>
        <Box>
          <Button size="small" kind="danger">
            Hello world
          </Button>
          <Button kind="danger">Hello world</Button>
          <Button size="big" kind="danger">
            Hello world
          </Button>
          <Button as="a" href="#" size="big" kind="danger">
            Hello world
          </Button>
        </Box>
        <Box>
          <Button size="small" kind="success">
            Hello world
          </Button>
          <Button kind="success">Hello world</Button>
          <Button size="big" kind="success">
            Hello world
          </Button>
          <Button as="a" href="#" size="big" kind="success">
            Hello world
          </Button>
        </Box>
      </Box>
    </Box>
  </Container>
);

export default IndexPage;
