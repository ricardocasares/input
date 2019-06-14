import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { theme } from "@/theme";

class Input extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width" />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:600i&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              html {
                font-size: 16px;
                box-sizing: border-box;
              }

              *, *::* {
                box-sizing: inherit;
              }

              body {
                margin: 0;
                line-height: 1.45;
              }
            `}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default Input;
