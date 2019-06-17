import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import normalize from "emotion-normalize";
import { theme } from "@/theme";

class InputApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Input → Priceless feedback</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              ${normalize}

              html {
                font-size: 16px;
                box-sizing: border-box;
                font-family: Maison, -apple-system, BlinkMacSystemFont,
                  "Segoe UI", Helvetica, sans-serif, "Apple Color Emoji",
                  "Segoe UI Emoji", "Segoe UI Symbol";
              }

              *,
              *::before,
              *::after {
                box-sizing: inherit;
              }

              body {
                margin: 0;
                font-weight: 400;
                line-height: 1.45;
              }

              html,
              body,
              #__next {
                height: 100%;
                min-height: 100%;
              }

              p {
                margin-bottom: 1.25em;
              }

              h1,
              h2,
              h3,
              h4,
              h5 {
                margin: 2.75rem 0 1rem;
                font-weight: 600;
                line-height: 1.15;
              }

              h1 {
                margin-top: 0;
                font-size: 1.802em;
              }

              h2 {
                font-size: 1.602em;
              }

              h3 {
                font-size: 1.424em;
              }

              h4 {
                font-size: 1.266em;
              }

              h5 {
                font-size: 1.125em;
              }

              small,
              .text_small {
                font-size: 0.889em;
              }

              p {
                margin-top: 0;
              }
            `}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default InputApp;
