import React from "react";
import { Container, Typography } from "@mui/material";

const Welcome = () => {
  const username = "demoUser";

  return (
    <Container maxWidth="sm">
      <Typography className="greeting" variant="h4" align="center" gutterBottom>
        Welcome, {username}!
      </Typography>
    </Container>
  );
};

export default Welcome;
