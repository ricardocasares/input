import React from "react";
import { Typography, Box } from "@material-ui/core";

export default function App() {
  return (
    <Box
      maxWidth={"50%"}
      m="auto"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Typography variant="h3" style={{ fontFamily: "IBM Plex Mono" }}>
        input
      </Typography>
    </Box>
  );
}
