import React from 'react'
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function PersonalLifeCard() {
  return (
    <Box>
      <div id="philosophy"></div>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "black",
          marginBottom: "10px",
          marginTop: "8vh",
        }}
      >
        My Personal Life
      </Typography>
      <div className="redLine"></div>
      <Typography variant="body1">
        Here's some photos of things I do in my free time like hiking and
        cooking: 
      </Typography><br/>
      <Alert severity="error">
        <AlertTitle>Coming Soon!</AlertTitle>
        This page is still getting some updates! Check back a little later...
      </Alert>
    </Box>
  );

}

