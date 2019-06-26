import { FC } from "react";
import Link from "next/link";
import { styled } from "@/styled";
import { List } from "@/components/List";
import { Nav } from "@/components/Link";
import { SvgLogo } from "@/components/Logo";
import { Container } from "@/components/Container";

type Header = {};

const Header = styled.header<Header>`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px 0;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  & > [role="navigation"] {
    color: red;
  }
`;

const FlexList = styled(List)`
  width: 100%;
  display: flex;

  li:first-child {
    flex-grow: 1;
  }
`;

export const Bar: FC = () => (
  <Header>
    <Container>
      <FlexList>
        <li>
          <Link href="/">
            <a href="/">
              <SvgLogo />
            </a>
          </Link>
        </li>
        <li>
          <Nav href="/api/auth">Login</Nav>
        </li>
      </FlexList>
    </Container>
  </Header>
);
