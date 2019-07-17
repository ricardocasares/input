import React from "react";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Container } from "@/components/Container";

import styled from "@emotion/styled";

const PricingBox = styled(Box)`
  display: flex;
  height: 100%;
  padding: 20px 0;
  margin-top: 100px;
  text-align: center;
  justify-content: space-between;
`;

const Pricing = () => (
  <Container>
    <Bar />
    <PricingBox>
      <div>hello</div>
      <div>world</div>
      <div>it's me</div>
    </PricingBox>
  </Container>
);

export default Pricing;
