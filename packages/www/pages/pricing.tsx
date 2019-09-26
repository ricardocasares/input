import React from "react";
import { media } from "@/theme/utils";
import { Text } from "@/components/Text";
import { Bar } from "@/components/Bar";
import { Box } from "@/components/Box";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

import styled from "@emotion/styled";
import { List } from "@/components/List";

const PricingBox = styled(Box)`
  display: grid;
  height: 100%;
  padding-top: 100px;
  justify-content: space-between;
  grid-gap: 20px;
  ${media({
    gridTemplateColumns: ["1fr", "1fr", ".5fr .5fr .5fr"]
  })}
`;

const Plan = styled(Box)`
  padding: 20px;
  border: 2px solid #333;
  border-radius: 4px;
  height: auto;
  transition: border-color 0.3s;
  :hover {
    border-color: rgb(0, 118, 255);
  }
`;

const PlanTitle = styled(Text)`
  margin: 0;
  font-weight: 100;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #333;
  color: #fff;
  position: relative;
`;

const PlanPrice = styled(PlanTitle)`
  text-align: center;
  font-weight: 400;
  font-size: 2rem;
  small {
    font-size: 11px;
    font-weight: 100;
    color: #999;
  }
`;

const PlanList = styled(List)`
  margin-bottom: 20px;
`;

const PlanItem = styled.li`
  padding: 5px 0;
  position: relative;
  font-weight: 100;
  color: #999;

  :last-of-type {
    border: none;
  }
`;

const PlanCTA = styled(Button)`
  width: 100%;
`;

const Pricing = () => (
  <Container>
    <Bar />
    <PricingBox>
      <div>
        <Text as="h1">Plans</Text>
        <Text as="p">Pay as you go? Flat rate? We got you covered.</Text>
        <Text as="small">
          <sup>1</sup> This plan will only be available during beta testing
          phase, so hurry up!
        </Text>
      </div>
      <Plan>
        <PlanTitle as="h2">
          Beta{" "}
          <Text as="small">
            <sup>1</sup>
          </Text>
        </PlanTitle>
        <PlanPrice as="h2">
          $49.99 <small>USD / year</small>
        </PlanPrice>
        <PlanList>
          <PlanItem>Flat fee</PlanItem>
          <PlanItem>Billed yearly</PlanItem>
          <PlanItem>Unlimited requests</PlanItem>
          <PlanItem>Cancel at any time</PlanItem>
        </PlanList>
        <PlanCTA kind="cta">Subscribe</PlanCTA>
      </Plan>
      <Plan>
        <PlanTitle as="h2">Kappa</PlanTitle>
        <PlanPrice as="h2">
          $0.0001 <small>USD / req</small>
        </PlanPrice>
        <PlanList>
          <PlanItem>Pay as you go</PlanItem>
          <PlanItem>Billed monthly</PlanItem>
          <PlanItem>Unlimited requests</PlanItem>
          <PlanItem>Cancel at any time</PlanItem>
        </PlanList>
        <PlanCTA kind="cta">Subscribe</PlanCTA>
      </Plan>
    </PricingBox>
  </Container>
);

export default Pricing;
