import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { AuthServerURL, CreateIframe } from "./web_message";

const style = {
  padding: "50px",
  color: "#fff",
  background: "#2a2e32",
};

export function App() {
  const [code, setCode] = useState("-----");

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data.response && event.data.response.token) {
        setCode(event.data.response.token);
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div style={style}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <h1 className="MuiTypography-root">WEB MESSAGE SANDBOX</h1>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={() => CreateIframe()} variant="contained" color="primary">
            Re Auth
          </Button>
        </Grid>
        <Grid item xs={12}>
          <p>auth endpoint : {AuthServerURL}</p>
          <p>auth token : {code}</p>
        </Grid>
      </Grid>
    </div>
  );
}
