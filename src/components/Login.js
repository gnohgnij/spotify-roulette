import React from "react";
import { Button, Typography } from "@mui/material";
import { loginUrl } from "../spotify";

const Login = () => {
  return (
    <div style={{ marginTop: "25vh", marginBottom: "25vh" }}>
      <div className="flex-center">
        <Typography variant="h1" align="center" m={8}>
          SPOTIFY ROULETTE
        </Typography>
      </div>
      <div className="flex-center">
        <Button
          className="login-logout button"
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = loginUrl;
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
