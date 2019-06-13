import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Hidden,
  Box
} from "@material-ui/core";
import CTAButton from "@/components/Button";
import theme from "@/theme";

export default function App() {
  return (
    <Box minHeight="100vh" marginTop={["90px", "105px"]}>
      <AppBar elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            style={{ fontFamily: "IBM Plex Mono", flexGrow: 1 }}
          >
            input
          </Typography>
          <Hidden xsDown>
            <Button variant="text" color="secondary">
              Documentation
            </Button>
            <Button variant="text" color="secondary">
              Signup
            </Button>
          </Hidden>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl">
        <Box
          justifyContent="center"
          display={["flex", "block"]}
          flexDirection="column"
          paddingTop={["0", "100px"]}
          minHeight="100vh"
          style={{
            backgroundImage: "url('/static/developer.svg')",
            backgroundSize: "cover",
            [theme.breakpoints.up("md")]: {
              background: "red",
              backgroundSize: "none"
            }
          }}
        >
          <Typography variant="h6">Priceless feedback</Typography>
          <Typography color="secondary" paragraph>
            Claim what is yours
          </Typography>
          <CTAButton variant="outlined">Get started</CTAButton>
        </Box>
      </Container>
    </Box>
  );
}
