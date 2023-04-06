import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  Snackbar,
} from "@mui/material";
import { Alert } from "@mui/lab";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "demoUser" && password === "demoPassword") {
      window.location.href = "/welcome";
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          id="submit"
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "16px" }}
        >
          Submit
        </Button>
      </form>
      <Snackbar
        open={error}
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="error" variant="filled">
          Invalid credentials
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LoginForm;
